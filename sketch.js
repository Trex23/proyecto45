const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

//var count;
var engine, world;
var vasoImg, vaso;
var fuegoImg, fuego;
var suelo, paredd, paredi;
var boton1, boton2, boton1Img, boton2Img;
var termo1Img, termo2Img, termo3Img, termo4Img, termo5Img, termo6Img, termo7Img, termo8Img, termo9Img, termo10Img;
var termometro;
var hielos=[];
var llamas=[];

function preload(){
  vasoImg= loadImage("Imagenes/Vaso-vidrio.png");
  fuegoImg=loadAnimation("Fuego/fuego1.png", "Fuego/fuego2.png","Fuego/fuego3.png","Fuego/fuego4.png","Fuego/fuego5.png","Fuego/fuego6.png","Fuego/fuego7.png","Fuego/fuego8.png" )
  termo1Img= loadImage("termometro/Termo10.png");
  termo2Img= loadImage("termometro/Termo20.png");
  termo3Img= loadImage("termometro/Termo30.png");
  termo4Img= loadImage("termometro/Termo40.png");
  termo5Img= loadImage("termometro/Termo50.png");
  termo6Img= loadImage("termometro/Termo60.png");
  termo7Img= loadImage("termometro/Termo70.png");
  termo8Img= loadImage("termometro/Termo80.png");
  termo9Img= loadImage("termometro/Termo90.png");
  termo10Img= loadImage("termometro/Termo100.png");

  boton1Img=loadImage("Imagenes/boton-az.png");
  boton2Img=loadImage("Imagenes/boton-rj.png");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true
  }
  suelo= Bodies.rectangle(400,780,800,30, options);
  World.add(world,suelo);
  rectMode(CENTER);

  /*var options1={
    isStatic:true,
    //visibility:false
  }
  paredd= Bodies.rectangle(460,600,10,200, options1);
  World.add(world,paredd);
  rectMode(CENTER);

  paredi= Bodies.rectangle(330,600,10,200, options1);
  World.add(world,paredi);
  rectMode(CENTER);*/

  vaso=createSprite(325, 560, 50,100);
  vaso.addImage(vasoImg);
  vaso.scale=0.6;

  termometro=createSprite(100,400,20,100);
  termometro.addImage(termo10Img);
  termometro.scale=1.2;


  boton1=createSprite(610,360,20,20);
  boton1.addImage(boton1Img);
  boton1.scale=0.5;
  boton2=createSprite(730,360,20,20);
  boton2.addImage(boton2Img);
  boton2.scale=0.5;

  fuego=createSprite(370,200,10,50);
  fuego.addAnimation("fuego", fuegoImg);
  fuego.scale=5;
}
 
function draw() {
  background("black");
  rect(suelo.position.x, suelo.position.y, 800,30); 
  /*rect(paredd.positionx,paredd.position.y, 10,200);
  rect(paredi.positionx,paredi.position.y, 10,200);*/

  for(var i=0; i<hielos.length; i++){
    mostrarHielos(hielos[i],i);
  }

  /*for(var o=0; o<llamas.length; o++){
    mostrarLlamas(llamas[o],o);
  }*/

  //cambiotermo();
  //fuegooo();
  Engine.update(engine);
  drawSprites();
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var hielitos= new Hielo(random(330,450),-30);
    hielos.push(hielitos);
    
  }
}

function mostrarHielos(hielos,index){
  if(hielos){
    hielos.display();
  }
}

/*function keyPressed2(){
  if(keyCode===UP_ARROW){
    var fueguitos= new Llama(370,200);
    llamas.push(fueguitos);
    
  }
}

function mostrarLlamas(llamas,index){
  if(llamas){
    llamas.display();
  }
}

function fuegooo(){
  if(keyCode===UP_ARROW){
    fuego=createSprite(370,200,10,50);
  fuego.addAnimation("fuego", fuegoImg);
  fuego.scale=5;
  }
}*/

/*function cambiotermo(){
  if(count=5){
    termometro.addImage(termo9Img);
    termometro.scale=1.2;
  }
}*/
