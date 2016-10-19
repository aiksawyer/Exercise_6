
///creating global variabes
var a;
var s;
var o;

function setup() {
  createCanvas(195, 451);
  
  //new instances of every chil class
  a = new Arcs(0, 0, HALF_PI);
  s = new Squares(0,0,1);
  o = new Other(0,0,40);
}

function draw() {
  background(226, 218, 216, 196);
  ///calling display method
  a.display(245);
  //calling jiggle from parent class
  a.jiggle();
  s.display(random(255));
  s.jiggle();
  o.display(random(255));
}