const router = require('express').Router();
const { json } = require('express/lib/response');
const { User } = require('../../models');

router.post('/sign-up', async (req, res) => {
	try {
		const userData = await User.create({
			username: req.body.username,
			password: req.body.password,
		});

		res.status(200).json(userData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
