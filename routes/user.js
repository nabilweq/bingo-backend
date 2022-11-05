const router = require('express').Router()

const auth = require('../controller/user/auth');
const user = require('../controller/user/user');

router.post('/signup', auth.signup)
router.post('/login', auth.login)
router.post('/add-waste', user.addWaste)

module.exports = router;