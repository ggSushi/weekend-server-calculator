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

//! It seems like the app.get is only here to send back the array info.
//! This seems to be done AFTER the initial push of the numbers 
//! object into the resultHistory array.
app.get('/numbers', (req, res) => {
    res.send(resultHistory)
})


//TODO I need to figure out how to get the operation going 
//TODO AND figure out how to display the operation.
app.post( '/number', (req, res) => {
    console.log('POST request made ofr /numbers');
    console.log(req.body);
    let numbersObject = req.body;
    resultHistory.push(numbersObject);
    res.sendStatus(201);
})
