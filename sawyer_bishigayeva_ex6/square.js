function Squares(x, y, r, alpha) {
  ///referring back variables from parent class
  Shape.call(this, x, y, r);
  
  ///display method
  this.display = function(alpha) {
    strokeWeight(this.r+1);
    fill(190, 123, 48,alpha);
    triangle(this.x, this.y+45, this.x, this.y+53, this.x+95, this.y);
    strokeWeight(this.r);
    fill(169, 156, 176, alpha);
    triangle(this.x, this.y+43, this.x, this.y+20, this.x+15, this.y+38);
    fill(0,alpha);
    quad(this.x+40, this.y+30, this.x+60, this.y+20, this.x+71, this.y+37, this.x+53, this.y+47);
    quad(this.x+59, this.y+62, this.x+80, this.y+50, this.x+89, this.y+70, this.x+70, this.y+81);
    quad(this.x, this.y+175, this.x, this.y+220, this.x+32, this.y+197, this.x+11, this.y+167);
    quad(this.x, this.y+225, this.x, this.y+240, this.x+117, this.y+161, this.x+110, this.y+150);
  }

};


//Inheriting parent class
Squares.prototype = Object.create(Shape.prototype);
Squares.prototype.constructor = Shape;