function beginBattle() {
    /*
    
    *Get Enemy to fight create new Enemy object
    *Load Enemy Battle Sprite
    *Load Player Battle Sprite
    Display Options / UI
    Determine first attacker
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
   
   
    if(battle === true){
      image(battleBackground, 0, 0, 300, 150);
      enemy = getEnemy('easy');
      newEnemy = new Enemy(enemy.name, enemy.health, enemy.attack, enemy.givenExp);
      playerBattleSprite = image(sprite2, 80, 55, 15, 30);
      enemyBattleSprite = image(slimeSprite, 195, 50, 40, 40);
      displayBattleText();
      battle = false;
    }
  
  
}
  
//displays in battle text
function displayBattleText(){
    push();
    textSize(14);
    fill(255);
    text("Attack", 10, 25);
    text("Run",10, 50);
    pop();
}