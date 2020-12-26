const router = require('express').Router();
const bcrypt = require('bcrypt');
const db = require('../db/index.js');

router.post('/register', async (req, res) => {
	const { email, username, password } = req.body;

	if (
		!email ||
		email.length < 5 ||
		!username ||
		username.length < 3 ||
		!password ||
		password.length < 3
	)
		return res.sendStatus(400);

	try {
		const result = await db.query(
			'INSERT INTO person(email, username, password) VALUES ($1, $2, $3)',
			[email, username, await bcrypt.hash(password, 10)]
		);
		console.log(result);
		res.sendStatus(200);
	} catch (err) {
		res.send(err);
	}
});

router.post('/login', async (req, res) => {
	res.send('Login');
});

module.exports = router;
