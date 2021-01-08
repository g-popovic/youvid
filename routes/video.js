const router = require('express').Router();
const { authUser } = require('../middleware/auth');
const db = require('../db/index');
const AWS = require('aws-sdk');
const multer = require('multer');
const { v4: uuid } = require('uuid');

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

const upload = multer({ storage }).single('video');

/*----------------------ROUTES----------------------*/

// Uploads an image file to AWS S3, sets the users profilePicture to the URL of the image
// Returns a link to the newly uploaded image
router.post('/upload-video', upload, (req, res) => {
	if (!req.file) return res.status(400).send('File not found');

	const originalName = req.file.originalname.split('.');
	const fileType = originalName[originalName.length - 1];

	if (fileType !== 'mp4' && fileType !== 'mov')
		return res.status(400).send('Invalid file type');

	const params = {
		Bucket: process.env.BUCKET_NAME,
		Key: `${uuid()}.${fileType}`,
		Body: req.file.buffer
	};

	s3.upload(params, async (err, data) => {
		if (err) return res.status(500).send(err);
		// db.query('INSERT INTO VIDEO ...')
		res.send(data);
	});
});

module.exports = router;
