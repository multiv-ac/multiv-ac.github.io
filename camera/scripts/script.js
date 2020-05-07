var video;
var vScale = 16;

function setup() { 
    let cnv = createCanvas(640, 480);
    cnv.parent("pantalla");
    pixelDensity(1);
    video = createCapture(VIDEO);
    //video.hide();
    video.size(width/vScale, height/vScale);
  }
  
  function draw() {
      background(0);
      video.loadPixels();
      loadPixels();
      video.hide();

    for (var y = 0 ; y < video.height; y++){
        for (var x = 0; x < video.width; x++){
            var index = (x + y * video.width)*4;
            var r = video.pixels[index+0];
            var g = video.pixels[index+1];
            var b = video.pixels[index+2];

            var bright = (r + g + b)/3;

            var w = map(bright, 0, 255, 0, vScale);
            noStroke();
            fill(bright);
            //rect(x*vScale, y*vScale, vScale, vScale);
            rect(x*vScale, y*vScale, w, w);
           }
        }
  }
    