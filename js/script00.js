"use strict";

// start the game message!
let globalCounter = 0;
function startGame(){
	alert('Let the game begin!');
	globalCounter++;
	if (globalCounter >= 1)
		window.clearInterval(timer00);
}
let timer00 = window.setInterval(startGame, 2000);

// conversation
function gameStep(){
	update_message(globalCounter)
	globalCounter++;
	if (globalCounter >= 5)
		window.clearInterval(timer01);
}
let timer01 = window.setInterval(gameStep, 5000);

function update_message(counter) {
	let text_frame = document.getElementById("text-blob");
	if (counter === 1){
		text_frame.innerHTML = "FarmDude: Weird, HAHA... what was that??";
	} else if (counter === 2){
		text_frame.innerHTML = "FarmDude: I'm just a calm and peaceful farm humanoid...";
	}else if (counter === 3){
		text_frame.innerHTML = "FarmDude: I'm just a calm and peaceful farm humanoid...<br><br>SecretiveManInTrenchCoat: DON'T LISTEN TO HIM!!!!";
	}else if (counter === 4){
		text_frame.innerHTML = "FarmDude: I'm just a calm and peaceful farm humanoid...<br><br>SecretiveManInTrenchCoat: DON'T LISTEN TO HIM!!!!<br>SecretiveManInTrenchCoat: Click here. Quickly!<br><button onclick='nextStep()' type='click'>What's Going On?!</button>";
	}
}

function nextStep(){
	window.location.href = "step1.html";
}