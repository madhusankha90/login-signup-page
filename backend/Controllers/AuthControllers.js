const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require("../Models/user");


exports.signup = async (req,res) => {
    const {userName,email,password} = req.body;
    try {
        const user = new User({name,email,password});
        await user.save();
        res.status(201).json({message:"Signup Successfully"})
        
    } catch (error) {
        res.status(400).json({error:"Error saving User"})
    }
}

exports.login = async (req,res) => {
    const {userName,email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message:"User not found"});
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.status(400).json({message:"Invalid Password"});
        }

        const token = jwt.sign({ id:user_id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.json({token});
    } catch (error) {
        res.status(400).json("Error Loggin");
    }
}

