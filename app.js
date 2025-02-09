//import express
const express = require('express');

// create app variable -> assigned result of calling express function
// add a wide number of methods to app variable
const app = express();

const port = process.env.PORT;
// start server
app.listen(port, () => {
    console.log('Yeah I run');
});