//import express
const express = require('express');

// create app variable -> assigned result of calling express function
// add a wide number of methods to app variable
const app = express();

// start server
app.listen(8080, () => {
    console.log('Yeah I run');
});