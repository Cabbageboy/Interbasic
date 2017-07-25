
var login_from=false;
function div_show() {
	if(login_from==false){
		document.getElementById('abc').style.display = "block";
	}
	else{
		document.getElementById('abc').style.display = "none";
	}
	login_from=!login_from;
}
 

function form_reset(){
	$('#first_name').val('');
	$('#last_name').val('');
	$('#email').val('');
	$('#password').val('');
}