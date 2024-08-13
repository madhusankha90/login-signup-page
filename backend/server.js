const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./Routes/authRouters');
const connectDB = require('./Models/db');

require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080




app.use(bodyParser.json());
app.use(cors());
app.use('/auth', router)

connectDB();

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`);
})