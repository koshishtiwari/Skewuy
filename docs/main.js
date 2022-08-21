import skewuy from 'skewuy';


window.onload = function (){
    const parent = document.querySelector("#skewuyContainer");
    skewuy({
        viewHeight: 200,
        frameCount: 12, 
        frameGutter: 86, 
        frameWidth: 427, 
        srcImg: "./assets/sneaker.png", 
        skewuyContainer: parent
    })
    // const skewuy1 = new Skewuy(200, 12,86,427,"./assets/sneaker.png",parent);

    const parent2 = document.querySelector("#skewuyContainer2");
    skewuy({
        viewHeight: 200,
        frameCount: 15, 
        frameGutter: 86, 
        frameWidth: 427, 
        srcImg: "./assets/cup.png", 
        skewuyContainer: parent2
    })
    // const skewuy2 = new Skewuy(200, 15,86,427,"./assets/cup.png",parent2);

    const parent3 = document.querySelector("#skewuyContainer3");
    skewuy({
        viewHeight: 200,
        frameCount: 15, 
        frameGutter: 86, 
        frameWidth: 427, 
        srcImg: "./assets/toyota.png", 
        skewuyContainer: parent3
    })
    // const skewuy3 = new Skewuy(200, 15,86,427,"./assets/toyota.png",parent3);

}
