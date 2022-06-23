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
		text_frame.innerHTML = "FarmDude: things are really getting out of hand";
	} else if (counter === 2){
		text_frame.innerHTML = "FarmDude: things are really getting out of hand<br><br>You(the user): Yup";
	}else if (counter === 3){
		text_frame.innerHTML = "FarmDude: things are really getting out of hand<br><br>You(the user): Yup<br><br>SecretiveManInTrenchCoat: Just, come on, ok?";
	}else if (counter === 4){
		text_frame.innerHTML = "FarmDude: things are really getting out of hand<br><br>You(the user): Yup<br><br>SecretiveManInTrenchCoat: Just, come on, ok?<br><button onclick='nextStep()' type='click'> O K </button>";
	}
}

function nextStep(){
	window.location.href = "step3.html";
}