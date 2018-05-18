var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
    	modal.style.display = "none";
	}
}

function addTeam() {
	document.getElementById('addTeam1').style.display='block';
}

function removeTeam() {
	document.getElementById('removeTeam1').style.display='block';
}

function editTeam() {
	document.getElementById('editTeam1').style.display='block'
}

function component() {
	document.getElementById('Comp1').style.display='block'
}

function viewComp() {
	document.getElementById('viewComp1').style.display='block'

}

function addComp() {
	document.getElementById('addComp1').style.display='block'

}

function editComp() {
	document.getElementById('editComp1').style.display='block'

}

function removeComp() {
	document.getElementById('remComp1').style.display='block'
}

function teamview(param1) {
	console.log(param1);
	document.getElementById('teamview1').style.display='block'
}
