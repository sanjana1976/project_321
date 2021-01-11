
class Box  {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility=255;
    World.add(world, this.body);
  }
  display(){
  //  console.log(this.speed)
    
    if(this.body.speed<10){
      var pos =this.body.position;
      
      rectMode(CENTER);
      fill("red");
       rect(pos.x, pos.y, this.width, this.height);
       var angle = this.body.angle;
       push();
       translate(this.body.position.x, this.body.position.y);
       rotate(angle);
       pop();
         }
    else{
      push();
    World.remove(world,this.body);
   
    //fill("red");
    //rect(pos.x, pos.y, this.width, this.height);
    //rectMode(CENTER);

  this.visibility= this.visibility-5
  tint(255,this.visibility);
    pop();
    }
  }
  score (){
    if(this.visibility<0 && this.visibility>-105){
      count= count+10
    }
  }
  
  };
 