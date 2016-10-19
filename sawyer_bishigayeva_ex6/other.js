function Other(x, y, r, alpha) {
  ///referring back variables from parent class
  Shape.call(this, x, y, r);

  ///display method
  this.display = function(alpha) {///method has a parameter that is distinct from the parent class
    fill(221, 221, 229, alpha);
    rect(this.x+77, this.y+260, this.r, this.r);
    fill(196, 75, 84,  alpha);
    rect(this.x+117, this.y+260, this.r, this.r);
    fill(215, 170, 163, alpha);
    rect(this.x+77, this.y+300, this.r, this.r);
    fill(210, 210, 220, alpha);
    rect(this.x+117, this.y+300, this.r, this.r);
    strokeWeight(3);
    line(this.x+80, this.y+208, this.x+78, this.y+420);
    line(this.x+120, this.y+208, this.x+118, this.y+422);
    line(this.x+160, this.y+208, this.x+158, this.y+425);
    line(this.x+5, this.y+260, this.x+200, this.y+263);
    line(this.x, this.y+300, this.x+200, this.y+303);
    line(this.x, this.y+340, this.x+200, this.y+343);
  }
}

///inheriting
Arcs.prototype = Object.create(Shape.prototype);
Arcs.prototype.constructor = Shape;
