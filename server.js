var http = require('http');
var fs = require('fs');
var qs = require('querystring');
 
var req= require('request');
var path=require('path');
var nets = require('net');
var HOST = '127.0.0.1';
var PORT = 12345;

http.createServer(
	function(request,response){
		var headers = request.headers;
			var method =request.method;
			var url =request.url;
			var body ='';
		console.log('request_url='+request.url);
		request.on('error',function(err){
			console.error(err);
			response.write(404);
		    response.end();

		}).on('data',function(chunk){
				body+=chunk;
			
		}
		).on('end',function(){
			response.writeHead(200, {
				  'Content-Type': 'text/html',
				  'X-Powered-By': 'bacon'
			});
			if(request.url=='/'){
				var readStream = fs.createReadStream('index.html');
				readStream.pipe(response);
		    }
		    else if(path.extname(request.url)=='.html'){
		    	request.url=request.url.slice(1);
		    	var readStream = fs.createReadStream(request.url);
		    	readStream.on('error',(error)=>{
		    			response.write(404);
		    			response.end();
		    	}).on('open',()=>{
		    		response.writeHead(200, {
						  'Content-Type': 'text/html',
						  'X-Powered-By': 'bacon'
						});
					readStream.pipe(response);
		    	});;
		    }
		}); 
	}

).listen(PORT,'0.0.0.0');