class Stone {
	constructor(x, y) {
	  var options = {
		"restitution":0.8,
		"friction":0.9,
		"density":12
	  };
	  this.body = Bodies.rectangle(x, y, 50, 50, options);
	  this.width = 150;
	  this.height = 40;
	  World.add(world, this.body);
	};
	display(){
	  var objectpos = this.body.position;
	  
	  var objectangle = this.body.angle;
  
	  push();
	  translate(objectpos.x, objectpos.y);
	  rotate(objectangle);
	  strokeWeight(3);
	  stroke('black')
	  fill('red')
	  rectMode(CENTER)
	  rect(0, 0, this.width, this.height);
	  pop();
	};
  };
  