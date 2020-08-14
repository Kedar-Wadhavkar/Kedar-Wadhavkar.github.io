
var Dial = function(container) {
    this.container = container;
    this.size = this.container.dataset.size;
    this.strokeWidth = this.size / 10;
    this.radius = (this.size / 2) - (this.strokeWidth / 2);
    this.value = this.container.dataset.value;
    this.direction = this.container.dataset.arrow;
    this.svg;
    this.defs;
    this.slice;
    this.overlay;
    this.arrow;
    this.create();
}

Dial.prototype.create = function() {
    this.createSvg();
    this.createDefs();
    this.createSlice();
    this.createOverlay();
    this.createArrow();
    this.container.appendChild(this.svg);
};

Dial.prototype.createSvg = function() {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', this.size + 'px');
    svg.setAttribute('height', this.size + 'px');
    this.svg = svg;
};

Dial.prototype.createDefs = function() {
    var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    var linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    linearGradient.setAttribute('id', 'gradient');
    var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute('stop-color', '#6E4AE2');
    stop1.setAttribute('offset', '0%');
    linearGradient.appendChild(stop1);
    var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute('stop-color', '#78F8EC');
    stop2.setAttribute('offset', '100%');
    linearGradient.appendChild(stop2);
    var linearGradientBackground = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    linearGradientBackground.setAttribute('id', 'gradient-background');
    var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute('stop-color', 'rgba(0, 0, 0, 0.2)');
    stop1.setAttribute('offset', '0%');
    linearGradientBackground.appendChild(stop1);
    var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute('stop-color', 'rgba(0, 0, 0, 0.2)');
    stop2.setAttribute('offset', '100%');
    linearGradientBackground.appendChild(stop2);
    defs.appendChild(linearGradient);
    defs.appendChild(linearGradientBackground);
    this.svg.appendChild(defs);
    this.defs = defs;
};

Dial.prototype.createSlice = function() {
    var slice = document.createElementNS("http://www.w3.org/2000/svg", "path");
    slice.setAttribute('fill', 'none');
    slice.setAttribute('stroke', 'url(#gradient)');
    slice.setAttribute('stroke-width', this.strokeWidth);
    slice.setAttribute('transform', 'translate(' + this.strokeWidth / 2 + ',' + this.strokeWidth / 2 + ')');
    slice.setAttribute('class', 'animate-draw');
    this.svg.appendChild(slice);
    this.slice = slice;
};

Dial.prototype.createOverlay = function() {
    var r = this.size - (this.size / 2) - this.strokeWidth / 2;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('cx', this.size / 2);
    circle.setAttribute('cy', this.size / 2);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', 'url(#gradient-background)');
    this.svg.appendChild(circle);
    this.overlay = circle;
};

Dial.prototype.createArrow = function() {
    var arrowSize = this.size / 10;
    var arrowYOffset, m;
    if(this.direction === 'up') {
        arrowYOffset = arrowSize / 2;
        m = -1;
    }
    else if(this.direction === 'down') {
        arrowYOffset = 0;
        m = 1;
    }
    var arrowPosX = ((this.size / 2) - arrowSize / 2);
    var arrowPosY = (this.size - this.size / 3) + arrowYOffset;
    var arrowDOffset =  m * (arrowSize / 1.5);
    var arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrow.setAttribute('d', 'M 0 0 ' + arrowSize + ' 0 ' + arrowSize / 2 + ' ' + arrowDOffset + ' 0 0 Z');
    arrow.setAttribute('fill', '#97F8F0');
    arrow.setAttribute('opacity', '0.1');
    arrow.setAttribute('transform', 'translate(' + arrowPosX + ',' + arrowPosY + ')');
    this.svg.appendChild(arrow);
    this.arrow = arrow;
};

Dial.prototype.animateStart = function() {
    var v = 0;
    var self = this;
    var intervalOne = setInterval(function() {
        var p = +(v / self.value).toFixed(2);
        var a = (p < 0.95) ? 2 - (2 * p) : 0.05;
        v += a;
        if(v >= +self.value) {
            v = self.value;
            clearInterval(intervalOne);
        }
        self.setValue(v);
    }, 10);
};

Dial.prototype.animateReset = function() {
    this.setValue(0);
};

Dial.prototype.polarToCartesian = function(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

Dial.prototype.describeArc = function(x, y, radius, startAngle, endAngle){
    var start = this.polarToCartesian(x, y, radius, endAngle);
    var end = this.polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
    return d;       
}

Dial.prototype.setValue = function(value) {	
		var c = (value / 100) * 360;
		if(c === 360)
			c = 359.99;
		var xy = this.size / 2 - this.strokeWidth / 2;
		var d = this.describeArc(xy, xy, xy, 180, 180 + c);
    this.slice.setAttribute('d', d);
    var tspanSize = (this.size / 3.5) / 3;
    this.text.innerHTML = Math.floor(value) + '<tspan font-size="' + tspanSize + '" dy="' + -tspanSize * 1.2 + '">%</tspan>';
};


var containers = document.getElementsByClassName("chart1");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart2");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart3");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart4");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart5");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart6");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart7");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart8");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart9");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart10");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart11");
var dial = new Dial(containers[0]);
dial.animateStart();

var containers = document.getElementsByClassName("chart12");
var dial = new Dial(containers[0]);
dial.animateStart();






$('#myCarousel1').carousel({
     interval: 4000,
     wrap: true,
     keyboard: true
 });

$('#myCarousel2').carousel({
     interval: 4000,
     wrap: true,
     keyboard: true
 });

$('#myCarousel3').carousel({
     interval: 4000,
     wrap: true,
     keyboard: true
 });

$('#myCarousel4').carousel({
     interval: 4000,
     wrap: true,
     keyboard: true
 });

$('#myCarousel5').carousel({
     interval: 4000,
     wrap: true,
     keyboard: true
 });

$('#myCarousel6').carousel({
     interval: 4000,
     wrap: true,
     keyboard: true
 });

$('#myCarousel7').carousel({
     interval: 4000,
     wrap: true,
     keyboard: true
 });

$('#myCarousel8').carousel({
     interval: 4000,
     wrap: true,
     keyboard: true
 });






function skillsRoute1() {
    let elmnt = document.getElementById("myCarousel1");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }

function skillsRoute2() {
    let elmnt = document.getElementById("myCarousel2");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }

function skillsRoute3() {
    let elmnt = document.getElementById("myCarousel3");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }

function skillsRoute4() {
    let elmnt = document.getElementById("myCarousel4");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }

function skillsRoute5() {
    let elmnt = document.getElementById("myCarousel5");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }

function skillsRoute6() {
    let elmnt = document.getElementById("myCarousel6");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }

function skillsRoute7() {
    let elmnt = document.getElementById("myCarousel7");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }

function skillsRoute8() {
    let elmnt = document.getElementById("myCarousel8");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }




// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function fullScreen(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


