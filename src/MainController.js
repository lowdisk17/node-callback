const express = require('express');
const app = express();
const port = 3000;

const service = require('./Service');

var callback = (input) => {
    console.log(`Callback : Your input is ${input}`);
};

app.get('/', (req, res) => {
    let input = req.query.input;
    service.execute(input, callback)
    res.send('Done');
});

app.listen(port, () => {
    console.log(`Express app is running on port ${port}`);
});