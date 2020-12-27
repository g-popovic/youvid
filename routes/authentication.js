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
		const {
			rows
		} = await db.query(
			'INSERT INTO person(email, username, password) VALUES ($1, $2, $3) RETURNING id',
			[email, username, await bcrypt.hash(password, 10)]
		);

		req.session.userId = rows[0].id;

		res.sendStatus(200);
	} catch (err) {
		res.send(err);
	}
});

router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) return res.sendStatus(400);

	try {
		const {
			rows
		} = await db.query('SELECT * FROM person WHERE email = $1 LIMIT 1', [email]);

		if (rows.length != 1) return res.status(401).send('Incorrect email.');

		const user = rows[0];

		if (await bcrypt.compare(password, user.password)) {
			req.session.userId = user.id;

			res.sendStatus(200);
		} else {
			return res.status(401).send('Incorrect password.');
		}
	} catch (err) {
		res.send(err);
	}
});

router.post('/logout', (req, res) => {
	req.session.userId = undefined;
	res.sendStatus(200);
});

module.exports = router;
