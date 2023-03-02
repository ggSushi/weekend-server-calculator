const express = require('express');
const router = express.Router();

//* imported from numbers.router.js
// import {resultsDisplay} from '.numbers.router.js';

//! GET Request
router.get('/', (req, res) => {
    res.send(resultsDisplay);
});

module.exports = router;