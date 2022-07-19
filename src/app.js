const express = require('express')
const app = express();
require('./db/conn')
const path = require('path')
const hbs = require('hbs')
const { error } = require('console')
const User = require('./modules/usermessage')
const mongoose = require('mongoose')
bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
const port = process.env.PORT || 5000

const templatepath = path.join(__dirname, '../src/templates/views')
const partialpath = path.join(__dirname, "../src/templates/partial");

app.use(express.json());
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/jq', express.static(path.join(__dirname, '../node_modules/jquery/dist')))
app.use('/partial', express.static(path.join(__dirname, '../styles/partial')))

app.set('view engine', 'hbs')
app.set('views', templatepath)
hbs.registerPartials(partialpath);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('signup.hbs')
})
app.get('/signup', (req, res) => {
    res.render('signup.hbs')
})
app.get('/signin', (req, res) => {
    res.render('signin.hbs')
})

app.post('/signup', async (req, res) => {
    try {
        const userData = new User(req.body);
        await userData.save();
        res.render('index.hbs');
    }
    catch (Error) {
        res.status(500).send(error)
    }
})
app.post('/signin', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        // const useremail = await User.findOne({ email: email })
        if (password === "password" && email === "admin123@gmail.com") {
            res.render("admin/index1.hbs")
        } else {
            res.send("Invalid Login Details")
        }
    } catch (error) {
        res.status(400).send("Invalid login detail")
    }
})

app.delete("/signup/:name",async (req,res)=>{
    let result = await data.deleteOne({
        name : req.query.name
    })
    console.warn(result);
})

app.listen(port, (req, res) => {
    console.log("Server is running at 5000")
});

