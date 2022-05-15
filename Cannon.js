class Cannon {
    constructor(x,y,w,h,angle){
     
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
       this.angle = angle;
       this.cannon = loadImage('assets/canon.png');
       this.cannonbase = loadImage('assets/cannonBase.png');     
    } 


    display(){
          
    // top canon 
    
     
    push()
      translate(this.x,this.y);
      rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon,0,0,this.w,this.h)
    pop()
    
    if(keyIsDown(RIGHT_ARROW)&&this.angle<70){
        this.angle+=1
        
    }

    if(keyIsDown(LEFT_ARROW)&&this.angle>-40){
        this.angle-=1
   
    }
    // base canon
    image(this.cannonbase,70,20,200,200);

    }







}

