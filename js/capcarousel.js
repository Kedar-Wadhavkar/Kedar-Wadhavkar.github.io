
var modal1 = document.getElementById("myModal1");

var modalImg1 = document.getElementById("img01");

var img11 = document.getElementById("img11");
var img12 = document.getElementById("img12");
var img13 = document.getElementById("img13");
var img14 = document.getElementById("img14");
var img15 = document.getElementById("img15");

img11.onclick = function(){modal1.style.display = "block";  modalImg1.src = 'css/art.png';  captionText.innerHTML = this.alt;}
img12.onclick = function(){modal1.style.display = "block";  modalImg1.src = 'css/cooking.png';  captionText.innerHTML = this.alt;}
img13.onclick = function(){modal1.style.display = "block";  modalImg1.src = 'css/drawing.png';  captionText.innerHTML = this.alt;}
img14.onclick = function(){modal1.style.display = "block";  modalImg1.src = 'css/photography.png';  captionText.innerHTML = this.alt;}
img15.onclick = function(){modal1.style.display = "block";  modalImg1.src = 'css/writing.png';  captionText.innerHTML = this.alt;}




var modal2 = document.getElementById("myModal2");

var modalImg2 = document.getElementById("img02");

var img21 = document.getElementById("img21");
var img22 = document.getElementById("img22");
var img23 = document.getElementById("img23");
var img24 = document.getElementById("img24");

img21.onclick = function(){modal2.style.display = "block";  modalImg2.src = 'css/cad.png';  captionText.innerHTML = this.alt;}
img22.onclick = function(){modal2.style.display = "block";  modalImg2.src = 'css/cae.png';  captionText.innerHTML = this.alt;}
img23.onclick = function(){modal2.style.display = "block";  modalImg2.src = 'css/crea.png';  captionText.innerHTML = this.alt;}
img24.onclick = function(){modal2.style.display = "block";  modalImg2.src = 'css/gdnt.png';  captionText.innerHTML = this.alt;}





var span1 = document.getElementsByClassName("close1")[0];

var span2 = document.getElementsByClassName("close2")[0];


span1.onclick = function() {  modal1.style.display = "none"; }

span2.onclick = function() {  modal2.style.display = "none"; }














