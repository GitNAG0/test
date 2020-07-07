const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./songRoutes.js'))
router.use('/api', require('./deezerRoutes.js'))
module.exports = router