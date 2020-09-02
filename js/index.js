var mybutton = document.querySelector('.gotopbtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}




function meRoute() {
    let elmnt = document.getElementById("everything");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }





function Route1() {
    let elmnt = document.getElementById("route1");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }


function Route2() {
    let elmnt = document.getElementById("route2");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }


function Route3() {
    let elmnt = document.getElementById("route3");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }


function Route4() {
    let elmnt = document.getElementById("route4");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }