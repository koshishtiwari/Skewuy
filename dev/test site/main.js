// window load
window.onload = function (){
    const parent = document.querySelector("#skewuyContainer");
    skewuy({
        viewHeight: 200,
        frameCount: 12, 
        frameGutter: 86, 
        frameWidth: 427, 
        srcImg: "../../docs/assets/spriteer.png", 
        skewuyContainer: parent
    })

    // const skewuy1 = new Skewuy(200, 12,86,427,"../../docs/assets/spriteer.png",parent);

    const parent2 = document.querySelector("#skewuyContainer2");
    skewuy({
        viewHeight: 200,
        frameCount: 15, 
        frameGutter: 86, 
        frameWidth: 427, 
        srcImg: "../../docs/assets/cup_sprite.png", 
        skewuyContainer: parent2
    })
    // const skewuy2 = new Skewuy(200, 15,86,427,"../../docs/assets/cup_sprite.png",parent2);

    const parent3 = document.querySelector("#skewuyContainer3");
    skewuy({
        viewHeight: 200,
        frameCount: 12, 
        frameGutter: 86, 
        frameWidth: 427, 
        srcImg: "../../docs/assets/cuptwelve.png", 
        skewuyContainer: parent3
    })
    // const skewuy3 = new Skewuy(200, 12,86,427,"../../docs/assets/cuptwelve.png",parent3);

}
