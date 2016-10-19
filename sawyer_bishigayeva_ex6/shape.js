
///parent class

function Shape(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  
  // generic shape
  
  //overridden in child classes.
  this.display = function() {
    point(this.x, this.y, this.r); 
  }
}

//jiggle is passed to all child classes
Shape.prototype.jiggle = function() {
  this.x += random(-.5, .5);
  this.y += random(-.5, .5);
}


