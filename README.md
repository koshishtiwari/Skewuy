# Skewuy 

(Swipe to Rotate!) 

Add a 3D rotation functionality to images without the need of uploading and rendering the 3D objects on your webpage.

Demo : https://Skewuy.vercel.app/


## Implementation

Using npm:

`npm install skewuy`

Using CDN:

Copy the following script tag into your index.html

`<script src="https://unpkg.com/skewuy"></script>`

Add following lines into the main js of your project

```
// if using npm
import skewuy from 'skewuy';

// create a container in your HTML document and load it here
const skewuyContainer = docuemnt.getElementById('skewuyContainer');

// call the skewuy function
skewuy({
    viewHeight: 200,
    frameCount: 12, 
    frameGutter: 86, 
    frameWidth: 427, 
    srcImg: "assets/spriteImg", 
    skewuyContainer: skewuyContainer
})
```

### The parameter object
skewuy expects a parameter object shown below

* *viewHeight* - height of the Skewuy | default 200,
* *frameCount* - number of frames in the sprite image,
* *frameGutter* - gap from left of the sprite image | default 86,
* *frameWidth* - size of each frames | default 427,
* *srcImg* - url of the image  ~ as string
* *skewuyContainer* - HTML DOM node
