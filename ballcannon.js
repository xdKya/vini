class Ballcannon{
 
    constructor(x,y){
   
        this.r = 30
        this.body=Bodies.circle(x,y,this.r,{isStatic:true})
        World.add(world,this.body);

        
        this.image = loadImage('assets/cannonball.png')
        this.trajetory = [];
        
    }
    
        display(){
         var pos = this.body.position
         push(); 
         imageMode(CENTER)                 
          image(this.image,pos.x,pos.y,this.r,this.r)
         pop();
          if(this.body.velocity.x>0&&this.body.position.x>300){
               var position = [this.body.position.x,this.body.position.y];
              this.trajetory.push(position); 
            }
             for(var i = 0;i<this.trajetory.length;i++){
                 image(this.image,this.trajetory[i][0],this.trajetory[i][1],5,5)
             }
        
        }
        
      shoot(){
      var newangle = cannon.angle-28;
      newangle = newangle*(3.14/180);
      var velocity = p5.Vector.fromAngle(newangle);
      velocity.mult(0.5);
      Matter.Body.setStatic(this.body,false);
      Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)}) 
      
          
     
    }  
   remove(index){
    Matter.Body.setVelocity(this.body,{x:0,y:0})
    setTimeout(()=>{
        World.remove(world,this.body)
        delete ballmat[index]
    },1000)

   }
  

}

