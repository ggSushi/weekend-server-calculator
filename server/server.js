const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
//!This app.use will allow req.body to be used. IMPORTANT
app.use(express.json());

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

//Global Variables

let resultHistory = [];
let resultsDisplay = [];

//! It seems like the app.get is only here to send back the array info.
//! This seems to be done AFTER the initial push of the numbers 
//! object into the resultHistory array.
app.get('/numbers', (req, res) => {
    res.send(resultHistory)
})

app.get('/result_history', (req, res) => {
    res.send(resultsDisplay);
})


//TODO I need to figure out how to get the operation going 
//TODO AND figure out how to display the operation.
app.post( '/numbers', (req, res) => {
    console.log('POST request made for /numbers');
    console.log(req.body);
    let numbersObject = req.body;
    let result;
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

