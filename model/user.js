var mongoose= require('mongoose');
var userSchema= mongoose.Schema({
		name: String,
		email:{
			type: String,
			unique: true
		},
		password: String,
		registerTime: Date,
		lastLoginTime: Date,
		following: [],
		followers: []
});
userSchema.methods.authenticate = function(password) {
	return this.password === password;
};



var user=mongoose.model('user',userSchema);
 
