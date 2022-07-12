const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res, next) => { console.log("You have hit the userRouter get request handler) res.send(`This is the router message for the subRouter `) });



module.exports = userRouter;