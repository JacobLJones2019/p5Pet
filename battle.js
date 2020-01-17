let turnOrder = [];

function beginBattle() {
    /*
    
    *Get Enemy to fight create new Enemy object
    *Load Enemy Battle Sprite
    *Load Player Battle Sprite
    *Display Options / UI
    *Determine first attacker
    p1 attack
    p2 lose hp
    check if battle over
    if battle is over
    give reward loot / exp
    if not over
    p2 attack
    p1 lose hp
    check battle
  
    */
   let enemy;
   let newEnemy;
   let playerBattleSprite;
   let enemyBattleSprite;
   let copyBattleAvatar = avatar;
   let actionTaken = false;
   let inCombat = false;
   
   
    if(battle === true){
      image(battleBackground, 0, 0, 300, 150);
      displayBattleText();

      //get the enemy and create a copy for the battle also load in player sprite
      enemy = getEnemy('easy');
      newEnemy = new Enemy(enemy.name, enemy.health, enemy.attack, enemy.speed, enemy.givenExp);
      playerBattleSprite = image(sprite2, 80, 55, 15, 30);

      //determine the sprite to load for battle.
      if(newEnemy.name === 'Goblin'){
        enemyBattleSprite = image(goblinSprite, 195, 50, 40, 40);
      }else if(newEnemy.name === 'Slime'){
        enemyBattleSprite = image(slimeSprite, 195, 50, 40, 40);
      }
      
      //Contact message (initialy to console) + determine turn order. 
      console.log("A wild " + newEnemy.name + " " + "appears.")
      if(newEnemy.speed >= copyBattleAvatar.speed){
        console.log(newEnemy.name + " " + "attacks first.");
        turnOrder.push(newEnemy, copyBattleAvatar);
      }else {
          console.log(copyBattleAvatar.name + " " + "goes first.");
          turnOrder.push(copyBattleAvatar, newEnemy);
      }
      console.log(turnOrder);

      //Take initial action / prompt the user for input
      if(turnOrder[0].name === copyBattleAvatar.name){
        inCombat = true;
        while (inCombat){
            let attackButton = createButton('Attack');
            console.log(newEnemy.health);
            inCombat = false;
        }
      }else{
          //basic enemy AI
          console.log(turnOrder[0].name + " " + "attack's you for just all kinds of damage");
      }

      battle = false;
    }
  
  
}



//displays in battle text
function displayBattleText(){
    push();
    textSize(14);
    fill(255);
    text("Attack", 10, 25);
    text("Skill", 245, 25);
    text("Run", 10, 125);
    pop();
}