const { string, required } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    }
})

const User = mongoose.model('users', userSchema);
module.exports = User;