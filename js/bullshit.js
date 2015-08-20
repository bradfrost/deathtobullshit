
var bullshitButton = document.getElementById("bullshitbutton");
var domain = "http://deathtobullshit.com";
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
			createBannerAd();
			createFooterAd();
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

function runParallax() {
	var posts = document.querySelectorAll('.post');
	for (i = 0; i < posts.length; ++i) {
		var ad = document.createElement('div');
		ad.setAttribute("data-top-bottom","transform:translateY(0px)");
		ad.setAttribute("data-center","transform:translateY(400px)");
		var img = document.createElement("img");
		img.setAttribute("src", domain + "/images/ads/" + adImages[getRandomInt(0,7)]);
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
	console.log(ypos);
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

window.onscroll = function() {
	checkFloater(); 
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
	alert("Wow you're a racist!");
	var popup = document.querySelector('.popup');
	popup.classList.add("hidden");
});

var popupLike = document.querySelector('.like-btn');
popupLike.addEventListener("click", function(event){
	alert("Whew! For a minute there we thought you were a racist!");
	var popup = document.querySelector('.popup');
	popup.classList.add("hidden");
});
