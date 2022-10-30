'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

app.get('/',(req,res)=>{
    res.send("Welcome to my side...")
})

app.get('/get',(req,res)=>{
    config.query('select * from users',(err,result)=>{
        if(err){
            console.log(err,"+++++++++++++++++++++++");
        }
        else{
            res.send(result)
            console.log(result)
        }
    })
})

app.listen(8080, () => console.log('Server is listening on http://localhost:'));