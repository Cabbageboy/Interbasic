
var path = require('path');

const express = require('express')
const app = express()


app.get('/',function(req,res){
	//res.redirect('views/index.html');
	res.render('pages/index');
});
app.set('views', 'public/views/');
app.set('view engine', 'ejs');

//log
app.use(function(req,res,next){
	console.log("request url="+req.url);
	next();
})


app.get('/:file', function (req, res,next) {
	// var options = {
	//     root: __dirname + '/public/views/pages',
	//     dotfiles: 'deny',
	//     headers: {
	//         'x-timestamp': Date.now(),
	//         'x-sent': true
	//     }
	//  };
 // 	var fileName = req.params.file;
	// res.sendFile(fileName, options, function (err) {
	//     if (err) {
	//       next(err);
	//     } else {
	//       console.log('Sent:', fileName);
	//     }
	// });
	//console.log(err.stack);
	res.render('pages/'+req.params.file);

});



app.use(express.static('public'));


 

app.listen(12345, function () {
  console.log('Example app listening on port 3000!')
});