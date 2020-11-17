
// Modal For photos

var modal = document.getElementById("myModal");var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span1 = document.getElementsByClassName("close1")[0];

var imgs11 = document.getElementById("imgs11");
var imgs12 = document.getElementById("imgs12");

var imgs51 = document.getElementById("imgs51");
var imgs52 = document.getElementById("imgs52");


imgs11.onclick = function(){ modal.style.display = "block";  modalImg.src = this.src; captionText.innerHTML = this.alt;}
imgs12.onclick = function(){ modal.style.display = "block";  modalImg.src = this.src; captionText.innerHTML = this.alt;}

imgs51.onclick = function(){ modal.style.display = "block";  modalImg.src = this.src; captionText.innerHTML = this.alt;}
imgs52.onclick = function(){ modal.style.display = "block";  modalImg.src = this.src; captionText.innerHTML = this.alt;}


span1.onclick = function() { modal.style.display = "none";}







// Modal For videos

var modal2 = document.getElementById("myModal2");
var modalVideo = document.getElementById("vid01");
var span2 = document.getElementsByClassName("close2")[0];

var vids13 = document.getElementById("imgs13");
var vids14 = document.getElementById("imgs14");

var vids21 = document.getElementById("imgs21");


vids13.onclick = function(){ modal2.style.display = "block";  modalVideo.src = "css/media/diffCas_vid.mp4";}
vids14.onclick = function(){ modal2.style.display = "block";  modalVideo.src = "css/media/vid6.mp4";}

vids21.onclick = function(){ modal2.style.display = "block";  modalVideo.src = "css/media/diffCas_2.mp4";}


span2.onclick = function() {modal2.style.display = "none";}














