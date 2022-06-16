export class Skewuy{

    //  argumemts for Skewuy  {viewHeight - height of the Skewuy ,
    //                         frameCount - number of frames,
    //                         frameGutter - gap from left of the sprite ,
    //                         frameWidth - size of each frames,
    //                         srcImg - url of the image as string
    //                         skewuyContainer - HTML DOM node obtain as queryselector
    //                         }

    constructor(viewHeight = 200, frameCount, frameGutter = -86, frameWidth = 427, srcImg, skewuyContainer){
        this.height = this.putUnits(viewHeight);
        this.width = "100%";
        this.frameCount = frameCount;
        this.frameGutter = this.putUnits(frameGutter);
        this.frameWidth = frameWidth;
        this.imgSrc = `url(${srcImg})`;
        this.skewuyParent = skewuyContainer;
        
        // INIT ~~~~
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
        const skewuyElem = document.createElement("div");
        skewuyElem.className = "skewuy";
        skewuyElem.style.backgroundImage = this.imgSrc;
        
        // set width of the skewuy container 100% and add the skewuy to the DOM
        this.skewuyParent.style.width = "100%";
        this.skewuyParent.appendChild(skewuyElem);



        // events handles
        
    } // constructor






    // method to put units to use in css
    putUnits(value) {
        return value + "px";
    }
}