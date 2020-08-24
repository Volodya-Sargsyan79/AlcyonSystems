const express = require('express')
const admin = express.Router()

admin.post('/', (req, res) => {
    console.log('olla');
    
})


module.exports = admin