// Get the modal for images
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img11 = document.getElementById("img11");
var img12 = document.getElementById("img12");
var vid13 = document.getElementById("vid13");
var modalImg = document.getElementById("img01");
var modalVideo = document.getElementById("video01");
var captionText = document.getElementById("caption");

img11.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img12.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal.style.display = "none";
}







// Get modal For videos

var modal2 = document.getElementById("myModal2");
var vid13 = document.getElementById("vid13");
vid13.onclick = function(){
  modal2.style.display = "block";
}
var span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function() { 
  modal2.style.display = "none";
}


var modal3 = document.getElementById("myModal3");
var vid21 = document.getElementById("img21");
vid21.onclick = function(){
  modal3.style.display = "block";
}
var span3 = document.getElementsByClassName("close3")[0];
span3.onclick = function() { 
  modal3.style.display = "none";
}











