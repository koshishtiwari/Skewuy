// window load
window.onload = function (){
    const parent = document.querySelector("#skewuyContainer");
    const skewuy1 = new Skewuy(200, 12,-86,427,"../../assets/sneaker.png",parent);

    const parent2 = document.querySelector("#skewuyContainer2");
    const skewuy2 = new Skewuy(200, 15,-86,427,"../../assets/cup.png",parent2);

    const parent3 = document.querySelector("#skewuyContainer3");
    const skewuy3 = new Skewuy(250, 15,-86,427,"../../assets/toyota.png",parent3);

}