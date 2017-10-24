var passport = require('passport');
var	LocalStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('user');


module.exports=function(){
	passport.use(new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
		},
		function(username, password, done) {
			User.findOne(
				{
					email: username
				},
				{
					email: 1,
					password: 1,
					name:1,
					lastLoginTime: 1,
					following: 1,
					followers: 1	
				},
				function(err, user) {
					if (err) {
						return done(err);
					}
					if (!user) {
						return done(null, false, {
							message: 'Unknown user or invalid password'
						});
					}
					if (!user.authenticate(password)) {
						return done(null, false, {
							message: 'Unknown user or invalid password'
						});
					}

					return done(null, user);
			});
		}
	));

	passport.serializeUser(function(user, done) {
	  done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findById(id, function(err, user) {
	    done(err, user);
	  });
	});
}

