const router = require('express').Router();
const { authUser } = require('../middleware/auth');
const AWS = require('aws-sdk');
const multer = require('multer');

/*----------------------SETUP----------------------*/

// Set up Amazon S3
const s3 = new AWS.S3({
	accessKeyId: process.env.IAM_USER_KEY,
	secretAccessKey: process.env.IAM_USER_SECRET
});

// Set up Multer (for recieving files and sending them to S3)
const storage = multer.memoryStorage({
	destination: (req, file, callback) => {
		callback(null, '');
	}
});

const upload = multer({ storage }).single('image');

/*----------------------ROUTES----------------------*/

// Uploads an image file to AWS S3, sets the users profilePicture to the URL of the image
// Returns a link to the newly uploaded image
router.post('/upload-video', authUser, upload, (req, res) => {
	const originalName = req.file.originalname.split('.');
	const fileType = originalName[originalName.length - 1];

	if (fileType !== 'mp4' && fileType !== 'mov') return res.sendStatus(400);

	const params = {
		Bucket: process.env.BUCKET_NAME,
		Key: `${uuid()}.${fileType}`,
		Body: req.file.buffer
	};

	s3.upload(params, async (err, data) => {
		if (err) return res.status(500).send(err);
		await User.updateOne(req.userId, { profilePicture: data.key });
		res.send(data);
	});
});
