"use strict";

// conversation
let globalCounter = 1;
function gameStep(){
	update_message(globalCounter)
	globalCounter++;
	if (globalCounter >= 5)
		window.clearInterval(timer01);
}
let timer01 = window.setInterval(gameStep, 5000);

function update_message(counter) {
	let text_frame = document.getElementById("text-blob");
	let picture_frame = document.getElementById("profile-pic");
	if (counter === 1){
		text_frame.innerHTML = "FarmDude: HAHA I'm just a person";
	} else if (counter === 2){
		picture_frame.src = "media/shen_comix/4.png";
		text_frame.innerHTML = "FarmDude: HAHA I'm just a person<br><br>You(the user, in Trump voice): Sad";
	}else if (counter === 3){
		
		text_frame.innerHTML = "FarmDude: HAHA I'm just a person<br><br>You(the user, in Trump voice): Sad<br><br>SecretiveManNowInTShirt: for sure a monster though.";
	}else if (counter === 4){
		text_frame.innerHTML = "FarmDude: HAHA I'm just a person<br><br>You(the user, in Trump voice): Sad<br><br>SecretiveManNowInTShirt: for sure a monster though.<br><button onclick='nextStep()' type='click'> Just End This </button>";
	}
}

function nextStep(){
	window.location.href = "step4.html";
}