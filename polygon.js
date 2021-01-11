class Poly  {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

       this.image = loadImage("pics/polygon.png");
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
     // pos.x= mouseX
     // pos.y= mouseY
      rectMode(CENTER);
     //fill("brown");
     //fill("red")
     // rect(pos.x, pos.y, this.width, this.height);
       imageMode(CENTER);
       image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };