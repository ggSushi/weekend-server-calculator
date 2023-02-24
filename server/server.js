const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
//!This app.use will allow req.body to be used. IMPORTANT
app.use(express.json());

//? Between this first bit of code and the following is
//? where we post the request functions. 
//? Everything here will be:
//? GET requests
//? POST requests
//? PUT requests (presumably)
//? DELETE requests (presumably)

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});