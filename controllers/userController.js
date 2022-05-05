const express = require('express')
const User = require('../models/user')

module.exports = {create,login};
  

async function create(req, res) {
    
    try {
      // Add the user to the db
      const user = await User.create(req.body);
      // token will be a string
      const token = createJWT(user);
      // Yes, we can serialize a string
      res.status(200).json(token);
    } catch (e) {
      // Probably a dup email
      res.status(400).json({ msg: e.message});
    }
  }