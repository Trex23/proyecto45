class Llama{
    constructor(x,y){
        this.fuego=createSprite(/*370,200*/x,y,10,50);
        this.animation=loadAnimation("Fuego/fuego1.png", "Fuego/fuego2.png","Fuego/fuego3.png","Fuego/fuego4.png","Fuego/fuego5.png","Fuego/fuego6.png","Fuego/fuego7.png","Fuego/fuego8.png" );

    }

    display(){
        var pos= this.fuego.position
        push()
        //imageMode(CENTER)
        addAnimation(this.animation,pos.x, pos.y, 100, 100);
        
        pop()
    }

}

/*fuego=createSprite(370,200,10,50);
  fuego.addAnimation("fuego", fuegoImg);
  fuego.scale=5;*/