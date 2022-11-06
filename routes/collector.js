const router = require('express').Router()

const { signup, login } = require('../controller/collector/auth');
const collector = require('../controller/collector/collector')

router.post('/signup', signup)
router.post('/login', login)
router.get('/get-requests', collector.getRequests);
router.get('/history', collector.history);
router.put('/accept/:id', collector.accept);
router.put('/completed-waste/', collector.markCompleted);

module.exports = router;