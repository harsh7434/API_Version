const express = require('express');
const port = 8052;

const app = express();
const mongoose = require('./config/mongoose');
const register = require('./models/ADMIN/register');
const passport = require('passport');
const passportJwt = require("./config/passport-jwt-stragy");

const session = require('express-session');
app.use(express.urlencoded());



app.use(session({
    name: "harsh",
    secret: "harsh",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 100
    }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use("/admin", require('./routes/API/V1/ADMIN/admin'));

app.listen(port, (err) => {
    if (err) console.log("Something is Worng");
    console.log("Server is running :", port);
});