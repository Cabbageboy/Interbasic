 
var setting=require('./config/settings')
var path = require('path');
var user_routes=require('./routes/user.authentication');
var passport=require('passport');
const fs=require('fs');
const express = require('express');
const session = require('express-session')  
var bodyParser = require('body-parser');




const app = express();


var mongoose= require('mongoose');
mongoose.connect(setting.dbdir);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){

});

require('./model/user');

app.use(session({
    // 你喜欢的任意名字作为一个加密用的字符串
    secret: 'igroup1234567',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize())  
app.use(passport.session())  

require('./config/passport')();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/',function(req,res){
	//res.redirect('views/index.html');
	res.redirect('/index');
});
app.set('views', 'public/views/');
app.set('view engine', 'ejs');

//log
app.use(function(req,res,next){
	console.log("request url="+req.url);
	next();
})

 
app.get('/:name', function (req, res,next) {
	if(req.params.name=='vcode'){
		 
	}
	else{
 
		res.render('pages/'+req.params.name,{user:req.user});
	}

});

user_routes(app);

app.use(express.static('public'));
 

app.listen(setting.port, function () {
  console.log('Example app listening on port ' + setting.port)
});