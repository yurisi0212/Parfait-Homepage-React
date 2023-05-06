import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return <Particles
        id="tsparticles" style={{ "margin-top": "61px" }} init={particlesInit} loaded={particlesLoaded} options={{
            "particles": {
                "shape": {
                    "type": "image",
                    "image": {
                        "src": "https://yurisi.space/new_Parfait/images/sweets_fruit_pafe.png",
                        "width": 200,
                        "height": 200
                    }
                },
                "number": {
                    "value": 20,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#fff"
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 30,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "bottom",
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
            "retina_detect": true
        }}
    />
}

export default Particle;