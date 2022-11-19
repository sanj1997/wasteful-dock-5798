const passport = require("../utils/google-oauth")
const express=require("express")
const router=express.Router()

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false }),
  function(req, res) {
    console.log(req.user)
    // Successful authentication, redirect home.
    //create main token and refresh token here to store in redux store
    res.send("Google sign in successful")
    // res.redirect('/');
  });

  module.exports=router