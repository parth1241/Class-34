const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const SAT = Matter.SAT;

var groundimg;
var ground;
var tram1,tram2,tram3,tram4,tram5;
var chain1,chain2,chain3,chain4;
var rock;
var flag;

function preload() {   
    groundimg=loadImage("/images/bg.jpg");

}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,371.5,1200,1);
    
    tram1= new buggy(200,370,50,50);
    tram2= new buggy(300,370,50,50);
    tram3= new buggy(400,370,50,50);
    tram4= new buggy(500,370,50,50);
    tram5= new buggy(600,370,50,50);

    chain1= new Chain(tram1.body,tram2.body);
    chain2= new Chain(tram2.body,tram3.body);
    chain3= new Chain(tram3.body,tram4.body);
    chain4= new Chain(tram4.body,tram5.body);

    rock= new Rock(1050,335,200,200);

    
}

function draw(){
    Engine.update(engine);
    
    ground.display();
    
    background(groundimg);

    var collision = Matter.SAT.collides(tram5.body,rock.body);
    if(collision.collided){
        flag = 1;
    }
    if(flag ===1){
        fill("red");
        textSize(50);
        text("CRASH",600,200);
    }

    
    
    tram1.display();
    tram2.display();
    tram3.display();
    tram4.display();
    tram5.display();

    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();

    rock.display();
    
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        Matter.Body.applyForce(tram5.body,{x:tram5.body.position.x,y:tram5.body.position.y},{x:300,y:0});
   console.log("a");
    }
}