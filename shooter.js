class Shooter {
    constructor(x,y,width,height,angle){
        this.x = x
        this.y = y
        this.width=width;
        this.height=height;
        this.angle=angle;
        
    }
          display(){
              fill ("brown");
              push ()
              translate (this.x,this.y);
              rotate (this.angle);
              rect (250,500,this.width,this.height);
              pop ()
              fill("black");
              arc (this.x+30,this.y-90,140,400,PI,TWO_PI);
              
          }
        }