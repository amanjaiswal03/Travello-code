const router = require('express').Router();
const passport = require('passport');



//auth logout
router.get('/logout', (req, res) => {
  res.logout();
  res.redirect('/');
});

//auth login with google
router.get('/google', passport.authenticate('google',{
  scope: ['profile']
}));

//auth login with facebook
router.get('/facebook', passport.authenticate('facebook',{
  scope: ['profile']
}));

//callback route for google to redirect
router.get('/google/redirect', passport.authenticate('google'), (req,res)=>{
  res.render('homepage', {user: req.user});
})

//callback route for facebook to redirect
router.get('/facebook/redirect', passport.authenticate('facebook'), (req,res)=>{
  res.render('homepage', {user: req.user});
})
module.exports = router;
