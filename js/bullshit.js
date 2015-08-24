
var bullshitButton = document.getElementById("bullshitbutton");
var domain = "http://deathtobullshit.com";
var bullshitMode = false;
var creepMode = false;
var s = false;
var adImages = [
	"cats.png",
	"celebcrimes.png",
	"childstars.png",
	"mortgageguy.png",
	"guyfieri.png",
	"oldwoman.jpg",
	"trump.png",
	"jaw.png",
	"glasses.png",
	"one-weird-trick.png",
	"teeth.png",
	"coffee.png",
	"creepy.png"
];
	
bullshitButton.addEventListener("click", function(event){
	event.preventDefault();
	if(bullshitMode === false){
		// Turn bullshit on
		if (confirm("Are you sure you want to see ALL of the bullshit?!")) {
			bullshitMode = true;
			event.target.innerHTML = "Please turn this bullshit off!";
			createAdImages();
			runSocial();
			switchBodyBullshit();
			createBannerAd();
			createFooterAd();
			checkParallax();
			createAdGridRow();
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
		killAdImages();
		killSocial();
		killParallax();
		killBodyBullshit();
		killBannerAd();
		killFooterAd();
	}
})

function switchBodyBullshit() {
	document.body.className = "bullshit";
	if(getRandomInt(1,3) === 2) {
		document.body.classList.add("car");
	}
}

function killBodyBullshit() {
	document.body.className = "";
}

function createAdImages(){
	var posts = document.querySelectorAll('.post');
	for (i = 0; i < posts.length; ++i) {
		var ad = document.createElement('div');
		ad.setAttribute("data-top-bottom","transform:translateY(0px)");
		ad.setAttribute("data-center","transform:translateY(400px)");
		var img = document.createElement("img");
		var randomImage = getRandomInt(0,adImages.length);
		img.setAttribute("src", domain + "/images/ads/" + adImages[randomImage]);
		ad.appendChild(img)
		if (i % 2 === 0) {
			ad.className = 'ad';
		}
		else {
			ad.className = 'ad ad-2';
		}
		posts[i].appendChild(ad);
	}
	
}

function killAdImages(){
	var ad = document.querySelectorAll('.ad');
	for (i = 0; i < ad.length; ++i) {
		ad[i].remove(ad);
	}
	
}

function checkParallax(){
	if (window.matchMedia("(min-width: 1200px)").matches) {
		if (s===false){
			runParallax();
		}
	} 
	
	else {
		killParallax();
	}
}

function runParallax() {
	s = skrollr.init();
}
	
function killParallax() {
	if (s!==false) {
		s.destroy();
		s = false;
	}
}



function createBannerAd() {
	var banner = document.querySelector('header');
	var img = document.createElement("img");
	img.className = "bannerimg";
	img.setAttribute("src", domain + "/images/chickfilabanner.png");
	var h1 = document.getElementById('logo');
	banner.insertBefore(img, h1);	
}

function killBannerAd() {
	var banner = document.querySelector(".bannerimg");
	banner.remove('header');
}


function checkFloater() {
	var ypos = window.pageYOffset;
	var floater = document.querySelector(".floater");
	if (ypos > 500) {
		floater.classList.add("active");
	}
	
	else {
		floater.classList.remove("active");
	}
}

function createFooterAd() {
	var footerad = document.querySelector('footer[role=contentinfo]');
	var img = document.createElement("img");
	img.className = "footerimg";
	img.setAttribute("src", domain + "/images/raisinbran.png");
	footerad.appendChild(img);
}

function killFooterAd() {
	var footerad = document.querySelector('.footerimg');
	footerad.remove();
}

var didScroll = false;

window.onscroll = function() {
	didScroll = true;
	
}

setInterval(function() {
    if (didScroll) {
        didScroll = false;
        checkFloater();
        checkAdGrid(); 
    }
}, 250);

window.onresize = function() {
	checkParallax();
}


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

var popupClose = document.querySelector('.popup-close-btn');
popupClose.addEventListener("click", function(event){
	event.preventDefault();
	alert("Wow you're a racist!");
	var popup = document.querySelector('.popup');
	popup.classList.add("hidden");
});

var popupLike = document.querySelector('.like-btn');
popupLike.addEventListener("click", function(event){
	event.preventDefault();
	alert("Whew! For a minute there we thought you were a racist!");
	var popup = document.querySelector('.popup');
	popup.classList.add("hidden");
});

var feedback = document.querySelector('.feedback-btn');
feedback.addEventListener("click", function(event){
	event.preventDefault();
	alert("We knew you had plenty of time to give us feedback!");
})

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function createAdGridRow() {
	var mayLikeStories = document.querySelector('.g');
	for (i=0; i<3; ++i){
		var gi = document.createElement('div');
		var randomImage = getRandomInt(0,adImages.length);
		gi.className = "gi";
		var img = document.createElement("img");
		if (creepMode){
			var imgsrc = "creepy.png";
		}
		else {
			var imgsrc = adImages[randomImage];
		}
		img.setAttribute("src", domain + "/images/ads/" + imgsrc);
		gi.appendChild(img);	
		mayLikeStories.appendChild(gi);
	}
}

function checkAdGrid(){
	var ypos = window.pageYOffset + window.innerHeight;
	var bodyLength = getDocHeight();
	console.log(bodyLength);
	console.log("Current Y-Position: " + ypos);
	if (ypos >= Math.floor(bodyLength-400)) {
		createAdGridRow();
	}
	if (ypos >10000) {
		creepMode = true;
	}
}

