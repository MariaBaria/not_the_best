"use strict";

function contactForm(){
	
	if (document.getElementById("contactMeForm")){
		return;
	}
	
	let contact_div = document.createElement("div");
	contact_div.setAttribute('class',"form");
	
	let divider = document.createElement("div");
	divider.setAttribute('style',"width:100; height:100;");
	contact_div.appendChild(divider);
	
	let contact_form = document.createElement("form");
	contact_form.setAttribute('id',"contactMeForm");
	contact_div.appendChild(contact_form);
	
	let label_1 = document.createElement("label");
	label_1.setAttribute('for',"name");
	label_1.innerHTML = "Full Name:";
	let input_1 = document.createElement("input");
	label_1.setAttribute('type',"text");
	label_1.setAttribute('name',"name");
	label_1.setAttribute('id',"nameInput");
	label_1.setAttribute('placeholder',"your name here");
	
	contact_form.appendChild(label_1);
	contact_form.appendChild(input_1);
	let divider1 = document.createElement("div");
	divider1.setAttribute('style',"width:100; height:1;");
	contact_form.appendChild(divider1);

	let label_2 = document.createElement("label");
	label_2.setAttribute('for',"email");
	label_2.innerHTML = "Free Text:";
	let input_2 = document.createElement("input");
	input_2.setAttribute('type',"text");
	input_2.setAttribute('name',"email");
	input_2.setAttribute('id',"emailInput");
	input_2.setAttribute('placeholder',"Talk to me (type here)");
	input_2.setAttribute('style',"height:300px; width:300px;");
	
	contact_form.appendChild(label_2);
	contact_form.appendChild(input_2);
	let divider2 = document.createElement("div");
	divider2.setAttribute('style',"width:100; height:1;");
	contact_form.appendChild(divider2);
	
	let input_button = document.createElement("input");
	input_button.setAttribute('type',"submit");
	input_button.setAttribute('value',"Send via email");
	input_button.setAttribute('onclick',"window.open('mailto:danielprigan@gmail.com')");
	input_button.setAttribute('style',"float:bottom;");
	
	contact_form.appendChild(input_button);
	
	document.body.appendChild(contact_div);
}