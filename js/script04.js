"use strict";

// conversation
let globalCounter = 1;
function gameStep(){
	update_message(globalCounter)
	globalCounter++;
	if (globalCounter >= 7)
		window.clearInterval(timer01);
}
let timer01 = window.setInterval(gameStep, 4000);

function update_message(counter) {
	let text_frame = document.getElementById("text-blob");
	let picture_frame = document.getElementById("profile-pic");
	if (counter === 1){
		text_frame.innerHTML = "F̶̭̜̿̿͘a̷͙̐̅̈́̍̓̂r̷̡̧̺̦͖̞̮̘̮͍͈̲͚̼̤̂̋͗͂̌͑̕͝m̵̟̰͔̜̠̰̙͇͚̺͂̐̀͛̓̽̑̅͂̾͘͝D̷̨̧̩̝̙̠̱͒̍͆́̉͂̾͊̀̎͘ų̸̡̱̰̱͈̠̖͚͎͍̙̆̉͒͒́̋̓̏̓͛͐̈́ď̵̛̹̠̖̤̓͐̓͂̈́͝e̵̢̢̻͖̖̜̪̦͙̳͚̣̐̀̀͊̌̒͋̽̾̊̈́̋͜:It's on!";
	} else if (counter === 2){
		text_frame.innerHTML = "F̶̭̜̿̿͘a̷͙̐̅̈́̍̓̂r̷̡̧̺̦͖̞̮̘̮͍͈̲͚̼̤̂̋͗͂̌͑̕͝m̵̟̰͔̜̠̰̙͇͚̺͂̐̀͛̓̽̑̅͂̾͘͝D̷̨̧̩̝̙̠̱͒̍͆́̉͂̾͊̀̎͘ų̸̡̱̰̱͈̠̖͚͎͍̙̆̉͒͒́̋̓̏̓͛͐̈́ď̵̛̹̠̖̤̓͐̓͂̈́͝e̵̢̢̻͖̖̜̪̦͙̳͚̣̐̀̀͊̌̒͋̽̾̊̈́̋͜:It's on!<br><br>SecretiveManNamedJack: It's Whooping o'clock";
	}else if (counter === 3){
		text_frame.innerHTML = "Boom! Zap! Zoing! HEEYA!";
	}else if (counter === 4){
		picture_frame.src = "media/shen_comix/done.png";
		picture_frame.style = "transform: scale(1.2, 1.2)";
		text_frame.innerHTML = "You(the user): We Won!";
	}else if (counter === 5){
		text_frame.innerHTML = "You(the user): We Won!<br><br>SecretiveManNowInTShirt: But at what cost?";
	}else if (counter === 6){
		picture_frame.src = "media/shen_comix/done.png";
		picture_frame.style = "transform: scale(1.2, 1.2)";
		text_frame.innerHTML = "You(the user): We Won!<br><br>SecretiveManNowInTShirt: But at what cost?<br><button onclick='nextStep()' type='click'> About Me Page </button>";
	}
}

function nextStep(){
	window.location.href = "AboutMe.html";
}