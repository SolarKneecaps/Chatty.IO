// route to get /
const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send('ROUTER WORKING');
})

module.exports = router;