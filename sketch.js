
var img;
var link;
var inp;

var input, button, greeting;


function preload() {
  img = loadImage("https://makezine.com/wp-content/uploads/2016/08/china-world-trade-center-beijing.jpg");
  //img = loadImage ("https://makezine.com/wp-content/uploads/2016/08/china-world-trade-center-beijing.jpg");
  //img = loadImage(link.input);
  //img = loadImage(img);

}



function setup() {

    createCanvas(800,700);

    input = createInput();
      input.position(20, 65);

      button = createButton('submit');
      button.position(input.x + input.width, 65);
      button.mousePressed(newImage);

      greeting = createElement('h2', 'Add your own picture by pasting its URL in this box');
      greeting.position(20, 5);

      textAlign(CENTER);
      textSize(50);


  // link = createInput('');
  // link.position(0,0);
  //
  // cnv = createCanvas(1000, 1000);
  // cnv.position(0,50);

}

function draw(){
    // inp = link.value();
    //
    //
    // console.log (inp);

      // cnv = createCanvas(img.width, img.height);
      // cnv.position(0,50);

      image(img, 50, 50, img.width, img.height);
      loadPixels();
      for(var i=0;i<4*pixels.length;i+=4) {
        if(pixels[i]+pixels[i+1]+pixels[i+2] >= 510) {
          //light
           pixels[i] = 255; //red
           pixels[i+1] = 255; //green
           pixels[i+2] = 255; //blue
         } else if (pixels[i]+pixels[i+1]+pixels[i+2] < 255) {
           //dark
              pixels[i] = 211; //63 85 119
              pixels[i+1] = 152; //226 176 167/ 211, 152, 146
              pixels[i+2] = 146; //27 86 181
          }else if (255 <= pixels[i]+pixels[i+1]+pixels[i+2]<510) {
            //mid
            pixels[i] = 237; //63 85 119
            pixels[i+1] = 186; //226 176 167/ 211, 152, 146
            pixels[i+2] = 177; //27 86 181
          }
        }

      updatePixels();

    // console.log ("bing bing bong bing bong");
}



  function newImage() {
  var link = input.value();
 // greeting.html('displaying image at this link '+link);
  input.value('');

img = loadImage(link);
  image(img, 50, 50, img.width, img.height);

  loadPixels();
  for(var i=0;i<4*pixels.length;i+=4) {
    if(pixels[i]+pixels[i+1]+pixels[i+2] >= 510) {
      //light
       pixels[i] = 255; //red
       pixels[i+1] = 255; //green
       pixels[i+2] = 255; //blue
     } else if (pixels[i]+pixels[i+1]+pixels[i+2] < 255) {
       //dark
          pixels[i] = 211; //63 85 119
          pixels[i+1] = 152; //226 176 167/ 211, 152, 146
          pixels[i+2] = 146; //27 86 181
      }else if (255 <= pixels[i]+pixels[i+1]+pixels[i+2]<510) {
        //mid
        pixels[i] = 237; //63 85 119
        pixels[i+1] = 186; //226 176 167/ 211, 152, 146
        pixels[i+2] = 177; //27 86 181
      }
    }

  updatePixels();
}


  //img = loadImage(link.input);
