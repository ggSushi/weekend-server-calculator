const express = require('express');
const router = express.Router();

//Global Variables

let resultHistory = [];
let resultsDisplay = [];

//! It seems like the app.get is only here to send back the array info.
//! This seems to be done AFTER the initial push of the numbers 
//! object into the resultHistory array.

//! GET Request
router.get('/', (req, res) => {
    res.send(resultHistory)
})



//TODO I need to figure out how to get the operation going 
//TODO AND figure out how to display the operation.
//! POST Request
router.post( '/', (req, res) => {
    console.log('POST request made for /numbers');
    console.log(req.body);
    let numbersObject = req.body;
    let result;
    if (numbersObject.first === '' || numbersObject.second === ''){
        alert('Please fill out all fields!');
        res.sendStatus('Error: Empty Fields');
    }

    if (numbersObject.operator === '+') {
        result = Number(numbersObject.first) + Number(numbersObject.second);
    } else if (numbersObject.operator === '-') {
        result = Number(numbersObject.first) - Number(numbersObject.second);
    } else if (numbersObject.operator === '*') {
        result = Number(numbersObject.first) * Number(numbersObject.second);
    } else if (numbersObject.operator === '/') {
        result = Number(numbersObject.first) / Number(numbersObject.second);
    }

    console.log(result);
    let calculation = `${numbersObject.first} ${numbersObject.operator} ${numbersObject.second} = ${result}`;
    resultHistory.push(calculation);
    resultsDisplay.push(result);
    console.log(calculation);
    res.sendStatus(201);
})

//! DELETE Request
router.delete('/:id', (req, res) => {
    console.log(req.params); // Similar to req.body
    //! .filter DOES NOT change the original array. It keeps the original intact.
    resultHistory = resultHistory.filter((calculation, index) => index !== req.params.id);
    resultsDisplay = resultsDisplay.filter((number, index) => index !== req.params.id);
    console.log('Result history:', resultHistory);
    console.log('Result display:', resultsDisplay);
    res.sendStatus(200);

})

//* exporting global variables to display.router.js
// export {resultsDisplay};


//! DON'T FORGET THIS
module.exports = router;