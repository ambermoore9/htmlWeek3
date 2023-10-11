console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted Successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

var image = document.getElementById("rubberduck");
image.addEventListener("mouseover", function(){
	alert("YOU ARE BEAUTIFUL");
})