class Hielo{
    constructor(x,y){
        /*options={
            density:1
        }*/
        this.body=Bodies.rectangle(x,y,70,70, )
        this.image=loadImage("Imagenes/hielo-az.png")
        
        World.add(world,this.body)

    }

    display(){
        var pos= this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x, pos.y, 100, 100);
        
        pop()
    }

}