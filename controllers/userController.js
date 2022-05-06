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
      console.log(e)
      res.status(400).json('Username or password is incorrect, haha.')
    }
}

// async function login(req, res) {
//   try {
//     // Find the user by their email address
//     const user = await User.findOne({email: req.body.email});
//     if (!user) throw new Error();
//     // Check if the password matches
//     const match = await bcrypt.compare(req.body.password, user.password);
//     if (!match) throw new Error();
//     res.status(200).json( createJWT(user) );
//   } catch(e) {
//     res.status(400).json({ msg: e.message, reason: 'Bad Credentials' });
//   }
// }



  function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }