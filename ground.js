class Ground {
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.width=1200;
        this.height=20;
    this.body=Bodies.rectangle(x,y,this.width,this,height,options)
World.add(world,this.body)
        
    }
          display(){
              var pos= this.body.position
              push ()
              translate (pos.x,pos.y);
              rectMode(CENTER);
fill("black");
              rect (0,0,this.width,this.height);
              pop ()
             
              
          }
        }