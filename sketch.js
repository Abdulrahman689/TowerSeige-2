const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var poly, rope,ground, world, bg, block1,platform

var gameState=1

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
  world = engine.world;
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

    poly = new Poly(100,350,50)
    rope = new Rope(poly.body,{x:100,y:300})
	platform = new Platform(450,400,200,20)
	// first layer
	block1 = new Block(370,380,40,40);
	block2 = new Block(410,380,40,40);
	block3 = new Block(450,380,40,40);
	block4 = new Block(490,380,40,40);
	block5 = new Block(530,380,40,40);
// second layer
    block6 = new Block(390,360,40,40);
	block7 = new Block(430,360,40,40);
	block8 = new Block(470,360,40,40);
	block9 = new Block(510,360,40,40);
	// third layer
	block10 = new Block(410,340,40,40);
	block11 = new Block(450,340,40,40);
	block12 = new Block(490,340,40,40);
	// fourth layer
	block13 = new Block(430,320,40,40);
	block14 = new Block(470,320,40,40);
	//fifth layer
	block15 = new Block(450,300,40,40);
}

function draw()
{
    background("black")
	Engine.update(engine); 
	if(keyDown(UP_ARROW)&&gameState===2){
		rope.attach(poly);
	}
	
    poly.display();
    rope.display();
	platform.display();
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
}

function mouseDragged(){
	if(gameState===1){
	Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
	}
	}
 	function mouseReleased (){
		 if(gameState===1){
	rope.fly();
	gameState = 2;
		 }
  }
  function keyPressed() {
	if (keyCode === 32&&gameState===2) {
		Matter.Body.setPosition(poly.body, {x: 300, y: 350});
		rope.attach(poly.body);
		gameState=1
		
	}
}
/*class Block{
    constructor(x,y,width,height){
var options={
 isStatic:false,
 restitution: 0.1,
 friction: 0.01,
 density:0.02
}
this.visibility=225
this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body)
this.x = x
this.y = y
this.width=width
this.height=height
    }

    display(){
        
        var pos = this.body.position;
        
        
        translate(pos.x,pos.y);
        
        rectMode(CENTER);
        fill("white")
        rect(pos.x,pos.y,this.width,this.height);
        
        }
        
    
}*/