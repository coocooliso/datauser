const config = require('config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userdata')

require('dotenv').config();

mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to database..."))
    .catch(err => {
        console.log(err);
    });

app.use(express.json());

app.use('/api/userdata', userRouter);

app.listen(config.get('DB_CONNECT'), (err, res) => {
    if (err) return res.status(400).send(err);
    console.log(`Listening on PORT: ${process.env.PORT}`);
});