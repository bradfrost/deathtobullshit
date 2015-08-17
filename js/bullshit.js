
var bullshitButton = document.getElementById("bullshitbutton");
var bullshitMode = false;
bullshitButton.addEventListener("click", function(event){
	if(bullshitMode === false){
		// Turn bullshit on
		if (confirm("Are you sure you want to see ALL of the bullshit?!")) {
			bullshitMode = true;
			event.target.innerHTML = "Please turn this bullshit off!";
			runParallax();
			runSocial();
		}
		else {
			// User selected cancel
			console.log("Thank God");
		}
	} 
	else {
		// Turn bullshit off
		bullshitMode = false;
		console.log("Good work.");
		event.target.innerHTML = "Turn bullshit on?";
		killSocial();
	}
})

function runParallax() {
	console.log("I'm running parallax. I suck.");
}

/* window.onscroll = function() {
	 console.log(window.pageYOffset); 
} */

function runSocial() {
	var posts = document.querySelectorAll('.post');
	for (i = 0; i < posts.length; ++i) {
		var social = document.createElement('div');
		social.className = 'social';
		posts[i].appendChild(social);
	}
	
}

function killSocial() {
	var social = document.querySelectorAll('.social')
	for (i = 0; i < social.length; ++i){
		social[i].remove(social);
	}
}

//Parallax script
var s = skrollr.init();




