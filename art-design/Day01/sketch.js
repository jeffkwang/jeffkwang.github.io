// Define variables
let symmetry = 6;

let angle = 360/symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;

function setup() {
 createCanvas(windowWidth, windowHeight);
 angleMode(DEGREES);

 // Setting up the slider for the thickness of the brush
 brushSizeSlider = createButton('Brush Size Slider');
 sizeSlider = createSlider(1, 32, 4, 0.1);
}

// Save file function
function saveFile() {
  save('kaleidoscope.jpg');
}

// Clear screen function
function clearScreen() {
  background(255);
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  background(random(256));
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        stroke(random(200), random(200), random(200));
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
