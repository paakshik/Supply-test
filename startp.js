/*function for setup basic*/;
var box_Delevered2 = 0,

const Engine = Matter.Engine
const World  = Matter.World
const Bodies = Matter.Bodies;
	
let flag = "start";
function startup1(){
	createCanvas(1600,800);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
}
/*function for draw basic*/
function startup2(){
    background(255);
	drawSprites();
}
