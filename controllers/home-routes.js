const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
	try {
		const userData = await User.findAll();
		const serializedUser = userData.map((user) => user.get({ plain: true }));
		console.log(serializedUser);
		res.render('homepage', {
			serializedUser,
		});
	} catch (err) {}
});

module.exports = router;
