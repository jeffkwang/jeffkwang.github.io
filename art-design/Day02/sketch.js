let x0 = 110;
let y0 = 176;
let x1 = 222;
let y1 = 19;
let x2 = 357;
let y2 = 170;
let delta = x2 - x0;

function setup() {
  createCanvas(1024, 768);
  background(197, 198, 184);

  strokeWeight(4);

  for (let i = 0; i < 2; i++) {
    for (let j=0; j < 3; j++) {
      let x_noise = random(248, 324);
      let y_noise = random(410, 491);
      
      stroke(83, 137, 113);
      fill(83, 137, 113);
      triangle(x0 + (x_noise * j), y0 + (y_noise * i), 
                x1 + (x_noise * j), y1 + (y_noise * i), 
                x2 + (x_noise * j), y2 + (y_noise * i));
      
      stroke(244, 230, 215);
      fill(244, 230, 215);
      rect(x0 + (x_noise * j) + (delta / 3), y0 + (y_noise * i), 114, 170);
    }
  }
}

function draw() {
  
}
