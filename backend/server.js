const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
require('./Models/db')

const PORT = process.env.PORT || 8080

app.get('/home',(req,res)=> {
    res.send('new');
})

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`);
})