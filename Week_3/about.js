console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form Submitted")
}

document.getElementById("imageContainer").addEventListener("mouseover", (() => alert("You are sexy as a cat")));


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);