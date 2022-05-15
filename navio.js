class Navio{

    constructor(x,y,w,h,boatpos,boatanim){
     this.body=Bodies.rectangle(x,y,w,h)
     World.add(world,this.body);
   
     this.w=w
     this.h=h
     this.boatposition=boatpos  
     this.image= loadImage('assets/boat.png')      
     this.animation = boatanim
     this.speed = 0.05
     this.isBroken = false
    }
   display(){
    var pos = this.body.position
    var angle = this.body.angle
    var index = floor(this.speed%this.animation.length)  
   push()
   translate(pos.x,pos.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.animation[index],0,this.boatposition,this.w,this.h)
   pop()


   }
   remove(index){
    Matter.Body.setVelocity(this.body,{x:0,y:0})
     this.animation = brokenboatanim
     this.speed = 0.05
     this.w = 300
     this.h = 300
     this.isBroken = true
     setTimeout(()=>{
        World.remove(world,navios[index].body)
       // delete navios[index]
       //problema no splice
       navios.splice(index, 1);
    },2000)

   }
 
   animate(){
       this. speed += 0.05
       
      
     
    }   



}
