const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));


app.get('/', (req, res, next) => { console.log('Welcome to the home page!') res.send(`<h1>This is the backend server for Sam</h1>`) });

const PORT = 1337; 
app.listen(PORT, () => { console.log(`Server is now running on port ${PORT})`});
