// document ready
window.onload = function() {
    // the sprite image
    let spriteObj = $("#card-hero");
    
    const frameGutter = 86;
    // const frameWidth = -428-frameGutter;
    // let backPos = -86;

    console.log(spriteObj.css("background-position-x"));
    
    // midpoint spriteObj -- use as origin
    const originNew = spriteObj[0].clientWidth;
    // console.log(spriteObj[0].clientWidth);
    const initialPos = parseInt(spriteObj.css("background-position-x"));

    spriteObj.on("mouseover", function(e){
        spriteObj.on("mousemove", function (event) {

            // divide the range of Mouse offsetX into 12(=>frameNo) equal fragments
            let mousePos = Math.trunc((event.offsetX/originNew) * 12); // total frames = 12
            

            let multiplier = 6 - mousePos; // half of total frame number = 6;

            if (multiplier == undefined || multiplier == 6) {
                multiplier = 5;
            }

            console.log(multiplier);

            let newPos = initialPos + (multiplier * 427)  // framewidth = 427
            let newPosCss = newPos + "px";
            console.log(newPosCss);
            spriteObj.css("background-position-x", newPosCss);
        
        })
    })



    

} // document load