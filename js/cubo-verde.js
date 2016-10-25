/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles',
  
{
  "particles": {
    "number": {
      "value": 110,
      "density": {
        "enable": false,
        "value_area": 710.2328774690454
      }
    },
    "color": {
      "value": "#1b1e34"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/vooxel/cubo_vooxell.png",
        "width": 100,
        "height": 100
      }
    },
      "opacity": {
      "value": 0.9,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 40,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 100,
        "size_min": 100,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 290,
      "color": "#ffffff",
      "opacity": 1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 25,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 32.48308849205381,
        "duration": 5,
        "opacity": 8,
        "speed": 20
      },
      "repulse": {
        "distance": 0,
        "duration": 0.1
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);