var second = 5;

var second_interval = setInterval(function(){

	var htmlEtement = document.getElementById("second");

		if(second == 0){
		clearInterval("second_interval");
		window.location.assign("index.html");
	}

	htmlEtement.innerHTML = "<h1>" + second + "s </h1>";

	second--;

},1000);