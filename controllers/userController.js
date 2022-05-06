const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')


module.exports = {create, login};
  

async function create(req, res) {
    try {
      const encryptedPassword = await bcrypt.hash(req.body.password, 10)
      // Add the user to the db
      const user = await User.create({...req.body, password:encryptedPassword});
      // token will be a string
      const token = createJWT(user);
      res.status(200).json(token);
    } catch (e) {
      res.status(400).json({ msg: e.message});
    }
  }

async function login(req,res){
    try{
      const user = await User.findOne({email: req.body.email})
      if(!user){
        throw new Error()
      }
      if(!await bcrypt.compare(req.body.password, user.password)){
        throw new Error()
      }
      const token = createJWT(user);
      res.status(200).json(token);
    }
    catch(e) {
      res.status(400).json('Username or password is incorrect, haha.')
    }
}

async function get(req,res){
  try{
    const user = await User.findOne()
  }
  catch(e){
    res.status(400).json('Failed to retrieve user data')
  }
}

  function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }