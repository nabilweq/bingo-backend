const router = require('express').Router()

const { signup, login } = require('../controller/user/auth.js');
const collector = require('../controller/collector/collector')

router.post('/signup', signup)
router.post('/login', login)
router.get('/get-requests', )
router.put('/completed-waste', collector.markCompleted);

module.exports = router;