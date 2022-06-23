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
	if (counter === 1){
		text_frame.innerHTML = "FarmDude: Hey! Stop pressing buttons please!<br>FarmDude: I don't come to your house and press buttons now do I?";
	} else if (counter === 2){
		text_frame.innerHTML = "FarmDude: Hey! Stop pressing buttons please!<br>FarmDude: I don't come to your house and press buttons now do I?<br><br>SecretiveManInTrenchCoat: Your voodoo don't work here evil spirit!";
	}else if (counter === 3){
		text_frame.innerHTML = "FarmDude: Hey! Stop pressing buttons please!<br>FarmDude: I don't come to your house and press buttons now do I?<br><br>SecretiveManInTrenchCoat: Your voodoo don't work here evil spirit!<br><br>FarmDude: You gotta chill out man";
	}else if (counter === 4){
		text_frame.innerHTML = "FarmDude: Hey! Stop pressing buttons please!<br>FarmDude: I don't come to your house and press buttons now do I?<br><br>SecretiveManInTrenchCoat: Your voodoo don't work here evil spirit!<br><br>FarmDude: You gotta chill out man<br>SecretiveManInTrenchCoat: Oh no, you ain't getting my milk. Quickly!<br><button onclick='nextStep()' type='click'>What?</button>";
	}
}

function nextStep(){
	window.location.href = "step2.html";
}