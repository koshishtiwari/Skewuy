// document ready
window.onload = function() {
    // the sprite image
    let spriteObj = $("#card-hero");
    
    const frameGutter = 86;
    const frameWidth = -428-frameGutter;
    let multiplier = 1;
    let backPos;

    
    
    // midpoint spriteObj -- use as origin
    const originNew = spriteObj[0].clientWidth/2;


    spriteObj.on("mouseover", function(e){
        // spriteObj.on("mousemove", function (event) {
        //     let mousePos = event.offsetX - originNew;
        //     if (mousePos >= 0) {
        //         skewyMaker();
        //     } else {

        //     }
        
        // })
        
    })

    // animator
    function skewyMaker(timecount) {
        
        if (multiplier < 12) {
            multiplier++;
        } else if (multiplier == 12) {
            multiplier = 1;
        }
        console.log(parseInt(timecount));
        backPos = multiplier * frameWidth + "px" + " 0";
        spriteObj[0].style.backgroundPosition = backPos;

        window.requestAnimationFrame(skewyMaker);
    }


    // spriteObj.style.backgroundPosition = backPos;
}