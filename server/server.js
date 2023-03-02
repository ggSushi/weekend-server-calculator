const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

const numbersRouter = require('./routes/numbers.router.js');
const displayRouter = require('./routes/display.router.js');

//!This app.use will allow req.body to be used. IMPORTANT
app.use(express.json());

app.use('/numbers', numbersRouter);
app.use('/result_history', displayRouter);

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});







