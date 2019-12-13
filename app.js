const config = require('config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userdata')

require('dotenv').config();

//const db = config.get('db');
mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Connected to ${process.env.DB_CONNECT}...`))
    .catch(err => {
        console.log(err);
    });

app.use(express.json());

app.use('/api/userdata', userRouter);

app.listen(process.env.PORT, (err, res) => {
    if (err) return res.status(400).send(err);
    console.log(`Listening on PORT: ${process.env.PORT}`);
});
