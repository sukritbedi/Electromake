var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
    	modal.style.display = "none";
	}
}

function signupOpen(){

	document.getElementById('id02').style.display='block';
	document.getElementById('id01').style.display='none';
	document.getElementById('id03').style.display='none';

}

function signupCloseLoginOpen(){
	document.getElementById('id01').style.display='block';
	document.getElementById('id02').style.display='none';
	document.getElementById('id03').style.display='none';

}

function chechAvailability(){
	document.getElementById('chAv').innerHTML = 'Available';
}

function forgotPass(){
	document.getElementById('id01').style.display='block';
	document.getElementById('id02').style.display='none';
	document.getElementById('id03').style.display='block';
}

function forgotPassClose() {
	document.getElementById('id01').style.display='block';
	document.getElementById('id02').style.display='none';
	document.getElementById('id03').style.display='none';
}
