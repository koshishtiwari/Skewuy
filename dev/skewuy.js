// Params for skewuy()
// { 
//   viewHeight - height of the Skewuy | default 200,
//   frameCount - number of frames in the sprite image,
//   frameGutter - gap from left of the sprite image | default 86,
//   frameWidth - size of each frames | default 427,
//   srcImg - url of the image  ~ as string
//   skewuyContainer - HTML DOM node
// }


class Skewuy{


    constructor(viewHeight, frameCount, frameGutter, frameWidth, srcImg, skewuyContainer){
        this.height = this.putUnits(viewHeight);
        this.width = "100%";
        this.frameCount = frameCount;
        this.frameGutter = this.putUnits(-1* frameGutter);
        this.frameWidth = frameWidth;
        this.imgSrc = `url(${srcImg})`;
        this.skewuyParent = skewuyContainer;
        
        // INIT
        // make sure the css for skewuy is not already there in head
         if (!(document.querySelector(".skewuy"))) {
            
            // laying the fundamental CSS properties of the skewuy class
            const skewuyCSS = `.skewuy{height: ${this.height};width: ${this.width};background-size: auto 240px; background-repeat: no-repeat;background-position-y: center; background-position-x: ${this.frameGutter};}`;

            // put the css properties inside <style> and append it to <head>
            const styleTag = document.createElement("style");
            styleTag.appendChild(document.createTextNode(skewuyCSS));
            document.head.appendChild(styleTag);

        } // end of check for previous instantiation

        // create the Skewuy Element
        this.skewuyElem = document.createElement("div");
        this.skewuyElem.className = "skewuy";
        this.skewuyElem.style.backgroundImage = this.imgSrc;
        
        // set width of the skewuy container 100% and add the skewuy to the DOM
        this.skewuyParent.style.width = "100%";
        this.skewuyParent.appendChild(this.skewuyElem);

        
        // Interactivity
        // some constants needed in mouse and touch events
        const finalWidth = parseInt(getComputedStyle(this.skewuyElem).width);
        const preBgPos = parseInt(getComputedStyle(this.skewuyElem).backgroundPositionX); 
        const _skewuy = this; // to use inside event handler
        
        // Mouse events
        this.skewuyElem.addEventListener("mousemove", function(e){
            // get the x-position of mouse
            let mousePos = Math.trunc((e.offsetX/finalWidth) * _skewuy.frameCount);

            // make mousePos within 0 and frameCount
            if (mousePos >= _skewuy.frameCount) {
                mousePos = _skewuy.frameCount - 1;
            } else if (mousePos < 0) {
                mousePos = 0;
            }

            let newBgPos = _skewuy.putUnits(preBgPos - (mousePos * _skewuy.frameWidth));
            _skewuy.skewuyElem.style.backgroundPositionX = newBgPos;
        })

        // Touch events
            this.skewuyElem.addEventListener("touchmove", function(e){
                const targetLeft = e.target.getBoundingClientRect();
                const touchLeft = e.touches[0].clientX;
                let touchMove;

                if (touchLeft < targetLeft.left) {
                    touchMove = 0;
                } else if (touchLeft > targetLeft.right){
                    touchMove = targetLeft.right;
                } else {
                    touchMove = e.touches[0].clientX - e.target.getBoundingClientRect().left;
                } 
                
                // get the x-position of touch
                let touchPos = Math.trunc(((touchMove)/finalWidth) * _skewuy.frameCount);

                // make touchPos within 0 and frameCount
                if (touchPos >= _skewuy.frameCount) {
                    touchPos = _skewuy.frameCount - 1;
                } else if (touchPos < 0) {
                    touchPos = 0;
                }

                let newBgPos = _skewuy.putUnits(preBgPos - (touchPos * _skewuy.frameWidth));
                _skewuy.skewuyElem.style.backgroundPositionX = newBgPos;

        })
        
    } // constructor


    // method to append "px" at the end of values - to use in css
    putUnits(value) {
        return value + "px";
    }
    
}

function skewuy (params){
    // the default values
    if(!params.viewHeight) {params.viewHeight = 200};
    if(!params.frameGutter) {params.frameGutter = 86};
    if(!params.frameWidth){ params.frameWidth = 427};

    return new Skewuy(params.viewHeight, params.frameCount, params.frameGutter, params.frameWidth, params.srcImg, params.skewuyContainer)
}

// module.exports.skewuy = skewuy;
export default skewuy;