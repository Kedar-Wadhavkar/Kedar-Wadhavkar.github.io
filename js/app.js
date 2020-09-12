particlesJS("particles-js",
    {
        "particles": {
            "number": {
                "value": 50,
                "density": { "enable": true, "value_area": 750 }
            },
            "color": { "value": "#00ffff" },
            "shape": {
                "type": "circle",
                "stroke": { "width": 0, "color": "#eeeeee" },
                "polygon": { "nb_sides": 5 },
                "image": { "src": "img/github.svg", "width": 100, "height": 1000 }
            },
            "opacity": {
                "value": 0.5, "random": false,
                "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
            },
            "size": { "value": 4, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": {
                "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false,
                "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "remove" }, "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 231.44200550588337,
                    "line_linked": { "opacity": 1 }
                },
                "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                "repulse": { "distance": 200, "duration": 0.4 },
                "push": { "particles_nb": 4 },
                "remove": { "particles_nb": 2 }
            }
        },
        "retina_detect": true
    });


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 8; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};




window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};





