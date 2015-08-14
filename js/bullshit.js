
var bullshitButton = document.getElementById("bullshitbutton");
var bullshitMode = false;
bullshitButton.addEventListener("click", function(event){
	if(bullshitMode === false){
		if (confirm("Are you sure you want to see ALL of the bullshit?!")) {
			bullshitMode = true;
			event.target.innerHTML = "Please turn this bullshit off!";
			runParallax();
		}
		else {
			console.log("Thank God");
		}
	} 
	else {
		bullshitMode = false;
		console.log("Good work.");
		event.target.innerHTML = "Turn bullshit on?";
	}
})

function runParallax() {
	console.log("I'm running parallax. I suck.");
}

var positionContainer = document.getElementById("position");
window.onscroll = function() {
	positionContainer.innerHTML = window.pageYOffset;
}
//Parallax script
var s = skrollr.init();




