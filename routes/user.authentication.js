module.exports=function(app){

	var user=require('../controllers/users/user.authentication.controller');
	app.route('/account/login').post(user.login);
	app.route('/account/register').post(user.register);
	app.route('/account/logout').get(user.logout);
}