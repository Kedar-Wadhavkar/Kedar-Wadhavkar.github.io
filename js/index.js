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
setTimeout(function () {
    let elmnt = document.getElementById("route1");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }, 600);
}

function Route2() {
setTimeout(function () {
    let elmnt = document.getElementById("route2");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }, 600);
}

function Route3() {
setTimeout(function () {
    let elmnt = document.getElementById("route3");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }, 600);
}

function Route4() {
setTimeout(function () {
    let elmnt = document.getElementById("route4");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }, 600);
}