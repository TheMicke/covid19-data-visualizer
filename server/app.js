const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
);
app.use(express.json());


module.exports = { app };