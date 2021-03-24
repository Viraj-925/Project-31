const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var rainDrop=[]
var maxDrop=500

function preload(){
    
}

function setup(){
   engine=Engine.create()
   world=engine.world
   createCanvas(700,600)
   if(frameCount%150 === 0){
       for(var i=0;i<maxDrop;i++){
           rainDrop.push(new Drop(random(0,700),random(0,700)))
       }
   }
    
}

function draw(){
    Engine.update(engine)
    background(0)
    for(var i=0;i<maxDrop;i++){
        rainDrop[i].display()
    }
}   

