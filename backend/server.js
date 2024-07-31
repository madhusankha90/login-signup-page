const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080

app.get('/home',(req,res)=> {
    res.send('new');
})

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`);
})