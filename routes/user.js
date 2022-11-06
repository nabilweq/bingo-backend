const router = require('express').Router()

const auth = require('../controller/user/auth');
const user = require('../controller/user/user');

router.post('/signup', auth.signup);
router.post('/login', auth.login);
router.post('/add-waste', user.addWaste);
router.get('/get-all-wastes', user.history);
router.put('/cancel-waste/:id', user.cancelWaste);
router.get('/get-pending-wastes', user.pendingWastes);
router.get('/get-waste/:id', user.getWaste);

module.exports = router;