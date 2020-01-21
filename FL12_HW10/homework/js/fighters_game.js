function Fighter(name, damage, hp, strength, agility) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
    this.maxHP = hp;
    this.strength = strength;
    this.agility = agility;
    this.wins = 0;
    this.losses = 0;
    this.isAlive = true;
    this.getName = function () {
        return this.name;
    }
    this.getDamage = function () {
        return this.damage;
    }
    this.getStrength = function () {
        return this.strength;
    }
    this.getAgility = function () {
        return this.agility;
    }
    this.getHealth = function () {
        return this.hp;
    }
    this.logCombatHistory = function () {
        let log = 'Name: ' + this.name + ', Wins: ' + this.wins + ', Losses: ' + this.losses;
        return log;
    }
    this.addWin = function () {
        this.wins++;
    }
    this.addLoss = function () {
        this.losses++;
    }
    this.heal = function (points) {
        this.hp += points;
        this.isAlive = true;
        
        if (this.hp > this.maxHP) {
            this.hp = this.maxHP;
        }
    }
    this.dealDamage = function(points) {
        this.hp -= points;
        
        if (this.hp < 0) {
            this.hp = 0;
        }
    }
    this.attack = function(defender) {
        let attackProb = 100-(defender.strength + defender.agility);
        let missProb = Math.random() * 100;

        if (attackProb > missProb) {
            defender.dealDamage(this.damage);
            console.log(this.name + ' makes ' + this.damage + ' damage to ' + defender.name);
        } else {
            console.log(this.name + ' attack missed');
        }
    }
}

let fighter1 = new Fighter('Maximus', 20, 100, 20, 15);
let fighter2 = new Fighter('Commodus', 25, 90, 25, 20);

function battle (fighter1, fighter2) {

    if (!fighter1.isAlive) {
        console.log(fighter1.name + " is dead and can't fight.")
    } else if (!fighter2.isAlive) {
        console.log(fighter2.name + " is dead and can't fight.")
    }

    while (fighter1.isAlive && fighter2.isAlive) {
        
        if (fighter1.hp === 0) {
            fighter1.isAlive = false;
            fighter1.losses++;
            console.log(fighter2.name + ' has won!');
            fighter2.wins++;
            break;
        } else {
            fighter1.attack(fighter2);
        }

        if (fighter2.hp === 0) {
            fighter2.isAlive = false;
            fighter2.losses++;
            console.log(fighter1.name + ' has won!');
            fighter1.wins++;
            break;
        } else {
            fighter2.attack(fighter1);
        }
    }
}

battle(fighter1, fighter2);