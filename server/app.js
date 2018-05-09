const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({
        "key":"test"
    });
})

app.listen(port,()=>{
    console.log("Server running on port " + port);
})