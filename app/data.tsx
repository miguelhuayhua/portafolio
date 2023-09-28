import { IOptions, RecursivePartial } from "tsparticles-engine";

export let particlesOptions: RecursivePartial<IOptions> = {
    "particles":
    {
        "number": { "value": 40, "density": { "enable": true, "value_area": 900 } },
        "color": { "value": "#ccc" },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#FFF"
            },
            "polygon": { "nb_sides": 5 },
        }, "opacity": {
            "value": 0.4, "random": false,
            "anim": { "enable": false, "speed": 0.5, "opacity_min": 0.1, "sync": false }
        },
        "size": {
            "value": 2, "random": true,
            "anim": { "enable": true, "speed": 20, "size_min": 1, "sync": false }
        },
        "line_linked": { "enable": true, "distance": 200, "color": "#ccc", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
    }, "interactivity": {
        "detect_on": "window", "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }, "resize": true
        },
        "modes": {
            "grab": { "distance": 100, "line_linked": { "opacity": 0 } },
            "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 1 }, "remove": { "particles_nb": 10 }
        }
    }, "retina_detect": true
}