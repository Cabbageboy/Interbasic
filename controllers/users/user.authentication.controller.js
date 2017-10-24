

var user = require('mongoose').model('user');
var passport = require('passport');

exports.login=function(req,res,next){
	passport.authenticate('local', function(err, user, info) {
		if (err || !user) {
			console.log(err);
			res.status(400).send(info);
		} else {

			// Remove sensitive data before login
			user.password = undefined;

			req.login(user, function(err) {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					// res.json(user);
					res.render('pages/index',{user:user});
				}
			});
		}
	})(req, res, next);
 
};

exports.logout=function(req,res,next){
   req.logout();
   res.redirect('/');
}

exports.register=function(req,res){
	var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	var email=req.body.email;
	var pwd=req.body.password;
	var rpwd=req.body.rpassword;
	if(re.test(email)==false){
		res.send('email format error');
	}
	else if(pwd!=rpwd){
		res.send('double password not match');
	}
	else{
		var tempuser=new user({email:email,password:pwd});
		tempuser.save(function(err){
		if(err){
			console.log(err);
			res.send('register failed');
		}
		else{
			res.send('register success');
		}
		});
	}

}