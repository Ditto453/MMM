/* dropdown functions */
function Dpbutt1(){
	document.getElementById("Dpdwn1").classList.toggle("show");
	}
window.onclick = function(event){
	if(!event.target.matches('.dropbtn')){
		
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i=0; i<dropdowns.length;i++){
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}

function Dpbutt2(){
	document.getElementById("Dpdwn2").classList.toggle("show");
	}
window.onclick = function(event){
	if(!event.target.matches('.dropbtn')){
		
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i=0; i<dropdowns.length;i++){
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}
/*end dropdown functions*/