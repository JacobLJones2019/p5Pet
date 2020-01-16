let cnv;
let background1;
let background2;
let battleBackground;
let sprite1;
let sprite2;
let goblinSprite;
let slimeSprite;
let newHomeSprite;
let scene = 1;
let avatar;
let battle = true;


//preloads game assets
function preload(){
  background1 = loadImage('./sceneAssets/scene1.png');
  background2 = loadImage('./sceneAssets/scene2.png');
  battleBackground = loadImage('./sceneAssets/arena.png');
  sprite1 = loadImage('./sceneAssets/sprite1.png');
  sprite2 = loadImage('./sceneAssets/sprite2.png');
  goblinSprite = loadImage('./sceneAssets/goblin.png');
  slimeSprite = loadImage('./sceneAssets/slime.png');
}

function setup() {
 document.body.style.backgroundColor = '#a3a3c2';
 cnv = createCanvas(300, 150);
 cnv.position(windowWidth / 2.75, windowHeight / 4);
 image(background1, 0, 0, 300, 150);
 newHomeSprite = new HomeSprite();
 avatar = new Avatar("Testy", 10, 10, 3);
}


//displays the navigation text
function displayText(){
  push();
  textSize(16);
  fill(255);
  text("Home", cnv.width / 12, 16);
  text("Train",cnv.width / 3.5, 16);
  text("Battle",cnv.width / 2.25, 16);
  text("Stats", cnv.width / 1.5, 16);
  pop();
}
//displays the avatars stats
function displayStats(){
  push();
  textSize(10);
  fill(255);
  text("Name: " + avatar.name, 10, 50);
  text("Health: " + avatar.maxHealth + "/" + avatar.health, 10, 65);
  text("Attack: " + avatar.attack, 10, 80);
}

function draw() {


  //scene 1 home screen, scene 2 training, scene 3 battle, scene 4, stats / status
  //check scene and load approriate resources
  if(scene === 1){
    image(background1, 0, 0, 300, 150);
    displayText();
    newHomeSprite.updateSprite();
    newHomeSprite.showSprite();
  }else if (scene === 2){
    image(background2, 0, 0, 300, 150);
    displayText();
  }else if(scene === 3){
    beginBattle();
  }else if(scene === 4){
    background(0);
    displayText();
    displayStats();
  }

}

function keyPressed(){

  // t for training, b for battle, s for stats, h for home
  if(key === 't'){
    scene = 2;
  }else if (key === 'b'){
    scene = 3;
  }else if(key === 's'){
    scene = 4;
  }else if (key === 'h'){
    scene = 1;
  }
}

//repositions canvas when the window is resized
function windowResized(){
  cnv.position(windowWidth / 2.75, windowHeight / 4);
}


// battle function in the battle screen once enemy has been determined
// exp to training time
// training time