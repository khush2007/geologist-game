class Iron {
	constructor(x, y) {
	  var options = {
		"restitution":0.8,
		"friction":3,
		"density":30
	  };
	  this.body = Bodies.rectangle(x, y, 50, 100, options);
	  this.width = 150;
	  this.height = 150;
	  World.add(world, this.body);
	};
	display(){
	  var ironpos = this.body.position;
	  
	  var ironangle = this.body.angle;
  
	  push();
	  translate(ironpos.x, ironpos.y);
	  rotate(ironangle);
	  strokeWeight(3);
	  stroke('black')
	  fill('black')
	  rectMode(CENTER)
	  rect(0, 0, this.width, this.height);
	  pop();
	};
  };
  