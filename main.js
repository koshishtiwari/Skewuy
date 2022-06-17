import {Skewuy} from "./dev/skewuy.js"

// window load
window.onload = function (){
    const parent = document.querySelector("#skewuyContainer");
    const skewuy1 = new Skewuy(200, 15,-86,427,"assets/cup_sprite.png",parent);

    const parent2 = document.querySelector("#skewuyContainer2");
    const skewuy2 = new Skewuy(200, 12,-86,427,"assets/spriteer.png",parent2);

    const parent3 = document.querySelector("#skewuyContainer3");
    const skewuy3 = new Skewuy(200, 12,-86,427,"assets/cuptwelve.png",parent3);

}