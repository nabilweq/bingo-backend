const router = require('express').Router()

router.use('/users', require('./user'));
router.use('/collectors', require('./collector'));

module.exports = router;