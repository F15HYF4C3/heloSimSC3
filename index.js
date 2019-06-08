const axios = require('axios');
const controller = require('./server/controller');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')
require('dotenv').config();

const {PORT, SESSION_SECRET, DATABASE_URL, DB_PW} = process.env;
const app = express();

app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}))
app.use(bodyParser.json())

massive(DATABASE_URL)
    .then((dbQuery)=>{
        console.log(`db is connected`)
        app.set('db', dbQuery)
    })
    .catch((err)=>{
        console.log(`There is something wrong.... ${err}`)
    })

    app.post('/api/login', controller.login);
    app.post('/api/register', controller.register);
    app.get('/api/ping', (req, res)=>{
        res.send('successful test')
    });
// New Inventory Item Creation

    // dbQuery.CREATE_PROD()
    // .then(items =>console.log(items))
    // .catch(err => console.log(err))

// Get Inventory Items

    // dbQuery.GET_PNAME()
    // .then(items => console.log(items))
    // .catch(err => console.log(err))
// })

app.listen(PORT, ()=>{
    console.log(`${PORT} ready for take-off in t-minus...`)
})