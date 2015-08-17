
var bullshitButton = document.getElementById("bullshitbutton");
var bullshitMode = false;
var s = false;
var adImages = [
	"cats.png",
	"celebcrimes.png",
	"childstars.png",
	"mortgageguy.png",
	"guyfieri.png",
	"oldwoman.jpg",
	"trump.png",
	"jaw.png"
	
];
	
bullshitButton.addEventListener("click", function(event){
	if(bullshitMode === false){
		// Turn bullshit on
		if (confirm("Are you sure you want to see ALL of the bullshit?!")) {
			bullshitMode = true;
			event.target.innerHTML = "Please turn this bullshit off!";
			runParallax();
			runSocial();
			switchBodyBullshit();
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
		killParallax();
		killBodyBullshit();
	}
})

function switchBodyBullshit() {
	document.body.className = "bullshit";
}

function killBodyBullshit() {
	document.body.className = "";
}

function runParallax() {
	var posts = document.querySelectorAll('.post');
	for (i = 0; i < posts.length; ++i) {
		var ad = document.createElement('div');
		ad.setAttribute("data-top-bottom","transform:translateY(0px)");
		ad.setAttribute("data-center","transform:translateY(400px)");
		var img = document.createElement("img");
		img.setAttribute("src","http://deathtobullshit.com/images/ads/" + adImages[getRandomInt(0,7)]);
		ad.appendChild(img)
		if (i % 2 === 0) {
			ad.className = 'ad';
		}
		else {
			ad.className = 'ad ad-2';
		}
		posts[i].appendChild(ad);
	}
		s = skrollr.init();
}

function killParallax() {
	var ad = document.querySelectorAll('.ad');
	for (i = 0; i < ad.length; ++i) {
		ad[i].remove(ad);
	}
		s.destroy();
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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}




