const router = require('express').Router()

router.use('/users', require('./user'));
router.use('/collector', require('./collector'));

module.exports = router;