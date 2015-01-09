window.onload = getTime();
function getTime() {
	
var d = new Date();
document.getElementById("clock").innerHTML = d.getHours() + ": " + d.getMinutes() + ": " + d.getSeconds();
}

setInterval(getTime, 1000);