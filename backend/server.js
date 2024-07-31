const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./Routes/authRouters')

require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080

app.get('/home',(req,res)=> {
    res.send('new');
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', router)

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`);
})