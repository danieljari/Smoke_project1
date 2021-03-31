let particles = [];

function setup() {
 

var canvas =  createCanvas(600, 400);
canvas.parent('first');


 
}

function draw() {
  background(0);
 for (let i = 0; i < 8; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    
  if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
    
    
    
    
    
  }
}




  

class Particle {
  
  constructor(){
      this.x = 300;
    this.y = 380;
    this.vx = random(-2, 2);
    this.vy = random(-1, -7);
    this.alpha = 255;
   
     
    
  }
  

  
 finished() {
  if(this.alpha < 0){
    
    return true;
    
  }
   
  
}
  
  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }
  
  show(){
    
    
    fill(this.alpha);
    ellipse(random(this.x,this.x-1),random(this.y,this.y+9),14);
    
  }
  
}