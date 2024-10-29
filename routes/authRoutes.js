const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('authpage')
})

module.exports = router