const router = require('express').Router()

const { signup, login } = require('../controller/user/auth.js');

router.post('/signup', signup)
router.post('/login', login)
router.get('/get-requests', )

module.exports = router;