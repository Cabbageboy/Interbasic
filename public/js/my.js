
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


$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
    }
);

 