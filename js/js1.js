
var flag = true;
function show_menu() {
	
	var menu1 = document.getElementById('menu1');
	if(flag){
		flag = !flag;
		menu1.style.display = "block";
	} else{
		flag = !flag;
		menu1.style.display = "none";
	}
	

}

function show_menu1() {
	document.getElementById('menu1').style.display = "none";
	flag = true;
}