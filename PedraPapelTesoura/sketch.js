const World = Matter.World;
const Engine = Matter.Engine;

var world, engine

function preload(){
  backgroundImg = loadImage("assets/fundo.jpg")
  titleImg = loadImage('assets/titulonovo.png')
  //buttonImg = loadImage('assets/botaoPlay.png')
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // engine = Engine.create();
  // world = engine.world;
  
  titleGame= createSprite(width/2,200);
  titleGame.addImage(titleImg);
  
  button = createImg("assets/botaoPlay.png");
  button.position(width/2 -275, 200)
  button.mouseClicked(mousePressed)
   
  cardPE = createImg("assets/botaoPE.png")
  cardPE.position(550,100)
  cardPE.size(400,400)
  cardPE.visible = false

  cardP = createImg("assets/botaoP.png")
  cardP.position(780,100)
  cardP.size(400,400)
  cardP.visible = false

  cardT = createImg("assets/botaoT.png")
  cardT.position(1010,100)
  cardT.size(400,400)
  cardT.visible = true
 
}

function draw() {
  
  background(backgroundImg);
  
 


  drawSprites();
}

function mousePressed() {
  titleGame.remove()
  button.remove()
  
}





