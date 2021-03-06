
class Enemy {
    constructor (name, health, attack, speed, givenExp){
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.speed = speed;
        this.givenExp = givenExp;
        this
    }
}

//enemyList[0].difficulty[*]
let enemyList = [
    {
        difficulty:[
            {
                easy: [
                    {
                        
                        name: "Goblin",
                        health: 10,
                        attack: 2,
                        speed: 3,
                        givenExp: 5
                        
                    },
                    {
                        
                        name: "Slime",
                        health: 5,
                        attack: 4,
                        speed: 1,
                        givenExp: 5
                        
                    }
                ]
            },
            {
                medium:[
                    {
                        zombie: "Zombie - Stats"
                    },
                    {
                        skeleton: "Skeleton - Stats"
                    }
                ]
            }
        ]
    }
]

//obtains random seed number to choose an enemy in getEnemy()
function getRandomEnemySeed(chosenDifficulty){
    let maxEnemyCount;

    if(chosenDifficulty === 'easy'){
        maxEnemyCount = enemyList[0].difficulty[0].easy.length;
    }else if(chosenDifficulty === 'medium'){
        maxEnemyCount = enemyList[0].difficulty[1].medium.length;
    }

    return Math.floor(Math.random() * maxEnemyCount);
}

//uses the random seed number from getRandomEnemySeed() and spawns it from that index
function getEnemy(chosenDifficulty) {
    let enemySeed = getRandomEnemySeed(chosenDifficulty);
    let indexPath;
    let chosenDifficultyInt;
    let indexPathKey;

    if(chosenDifficulty === 'easy'){
        chosenDifficultyInt = 0;
        indexPath = enemyList[0].difficulty[chosenDifficultyInt].easy[enemySeed];
        indexPathKey
    }else if(chosenDifficulty === 'medium'){
        chosenDifficultyInt = 1;
        indexPath = enemyList[0].difficulty[chosenDifficultyInt].medium[enemySeed];
    }

    return indexPath;
}