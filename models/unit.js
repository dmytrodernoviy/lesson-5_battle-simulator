import baseUnit from "./baseUnit";

export default class Unit extends baseUnit {
    constructor(health, recharge) {
        super()
        this.setHealth(health)
        this.setRecharge(recharge)
    }

    makeDamage() {

    }

    attackSucces() {

    }

    damageReceive() {

    }

    isAlive() {

    }

    setRecharge() {

    }

    isRecharge() {

    }

    startRecharge() {       

    }

    getHealth() {

    }

    setHealth(health) {

        if(health < 0) {
            this.health = 0;
        } if(health > 100) {
            this.health = 100;
        } else {
            this.health = health;
        }
    }

    timeRecharge() {

    }

    getPower() {
        // сила юнита
    }
}
