const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var canvas, backgroundImg;
var baloon2, baloon1, baloon3, baloon4,baloon5, baloon6, baloon7, baloon8, baloon9, baloon10;
var b1Img, b2Img, b3Img, b4Img, b5Img;
var shooter;

function preload(){
  backgroundImg = loadImage("backgroundImg.jpeg");
  b1Img = loadImage("b1.png");
  b2Img = loadImage("b2.png");
  b3Img = loadImage("b3.png");
  b4Img = loadImage("b4.png");
  b5Img = loadImage("b5.png");
}
function setup(){
  createCanvas(1200,650);
  engine=Engine.create()
    world=engine.world;
    angle = -PI/4
  
  shooter = new Shooter(325,90,100,50,angle);
 ground= new Ground(400,650,1200,20);
 for(var i = 0;i<1170;i=i+45 ){
  baloon1=createSprite(i+20,25,20,40);
  baloon1.addImage(b1Img);
  baloon1.scale=0.2;

 }
 for(var i = 0;i<1175;i=i+45){
   baloon2=createSprite(i+30,66,10,10);
   baloon2.addImage(b2Img);
   baloon2.scale=0.2;
 }
 for(var i = 0;i<1200;i=i+45) {
   baloon3=createSprite(i+50,110,10,10);
   baloon3.addImage(b4Img);
   baloon3.scale=0.2;
 }
 for(var i=0;i<1200;i=i+45){
   baloon4=createSprite(i+80,150,10,10);
   baloon4.addImage(b3Img);
   baloon4.scale=0.25;
   }
 for(var i=0;i<2000;i=i+48){
   baloon5  = createSprite(i+22,195,10,10);
   baloon5.addImage(b5Img);
   baloon5.scale=0.13;
 }

 for(var i = 0;i<1005;i=i+50 ){
  baloon6=createSprite(i+30,245,10,10);
  baloon6.addImage(b1Img);
  baloon6.scale=0.25;

 }
 for(var i = 0;i<1050;i=i+55){
   baloon7=createSprite(i+50,300,10,10);
   baloon7.addImage(b2Img);
   baloon7.scale=0.25;
 }
 for(var i = 0;i<1115;i=i+55) {
   baloon8=createSprite(i+100,405,10,10);
   baloon8.addImage(b3Img);
   baloon8.scale=0.30;
 }
 for(var i=0;i<1090;i=i+55){
   baloon9=createSprite(i+85,350,10,10);
   baloon9.addImage(b4Img);
   baloon9.scale=0.25;
 }
 for(var i=0;i<950;i=i+50){
   baloon10  = createSprite(i+200,450,10,10);
   baloon10.addImage(b5Img);
   baloon10.scale=0.13;
 }
}

function draw(){
//background(backgroundImg);

Engine.update(engine)
shooter.display();
ground.display();
drawSprites();
}
