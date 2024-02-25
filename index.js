const express = require('express');
const port = 8052;

const app = express();
// const mongoose = require('./config/mongoose');
const register = require('./models/ADMIN/register');
const passport = require('passport');
const passportJwt = require("./config/passport-jwt-stragy");

const session = require('express-session');
app.use(express.urlencoded());

const mongoose = require('mongoose');
mongoose.connect(("mongodb+srv://rathodharsh7434:Dimpal74348@cluster0.pucwosc.mongodb.net/API_Version"), {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));


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