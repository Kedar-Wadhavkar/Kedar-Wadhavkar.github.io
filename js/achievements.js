var mybutton = document.querySelector('.gotopbtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	mybutton.style.display = "block";
	} 

	else {
	mybutton.style.display = "none";
	}
}