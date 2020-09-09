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





function thesisRoute() {
    let elmnt = document.getElementById("abstractread1");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }

function thesisRoute2() {
    let elmnt = document.getElementById("abstractread2");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }




