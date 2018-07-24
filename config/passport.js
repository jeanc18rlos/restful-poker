const passport = require('passport'),
      User = require('../models/user'),
      config = require('./main'),
      jwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' }; 

const jwtOptions = {
    //Telling passport to check authorization headers for jwt
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme("Authorization"),
    // Telling passport where to find the secret
    secretOrKey: config.secret
};

//setting up local login strategy
const localLogin = new LocalStrategy(localOptions, function(email, password, done ){
    
    User.findOne({email:email}, function(err, user){
      if(err){ return done(err);}
      if(!user){return done(null, false, {error: "Your login details could not be verified. Please try again."});}

    user.comparePassword( password, function(err, isMatch){
        if(err){ return done(err);}
        if(!isMatch){return done(null, false, {error :"Your login details could not be verified. Please try again."});}
    
        return done(null, user);
        });
    });
});


//Setting up JWT Login
const jwtLogin = new jwtStrategy(jwtOptions, function(payload, done){
    User.findById(payload._id, function(err, user){
        if (err) {
            return done(err,false);
        }
        if(user){
            done(null, user);
        }
        else{
            done(null,false); 
        }
    });
});

passport.use(jwtLogin);  
passport.use(localLogin);  