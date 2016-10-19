function Arcs(x, y, r, alpha) {
  // Variables are inherited from the parent.
 Shape.call(this, x, y, r);

  ////display method
  this.display = function(alpha) {  ///method has a parameter that is distinct from the parent class
    strokeWeight(1);
    fill(212, 180, 103, 195, alpha);
    arc(this.x, this.y, 77, 80, 0, this.r);
    fill(89, 149, 197, 200, alpha);
    arc(this.x, this.y, 60, 65, 0, this.r);
    strokeWeight(0);
    fill(178, 59, 27, 240, alpha);
    arc(this.x, this.y+113, 85, 85, 0 - this.r, this.r);
    fill(169, 156, 176, 220, alpha);
    arc(this.x,this.y+110, 80, 80, 0 - this.r, this.r);
    strokeWeight(3);
    fill(231, 231, 231, alpha);
    ellipse(this.x+125, this.x+40, 63, 63);
  }
};

// Inherit from the parent class
Arcs.prototype = Object.create(Shape.prototype);
Arcs.prototype.constructor = Shape;
