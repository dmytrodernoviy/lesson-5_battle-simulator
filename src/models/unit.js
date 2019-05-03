import { BaseUnit } from "./baseUnit";

export default class Unit extends BaseUnit {
    constructor(health, recharge) {
        super()
        this.health = health
        this.recharge = recharge
        this.attackReady = true;
        this.rechargeTime = 0;
    }

    isAlive() {
        return (this.health > 0) ? true : false // живой ли юнит
    }

    startRecharge() {// старт перезарядки
        this.attackReady = this.attackReady ? false : true;
        this.rechargeTime = Date.now()
    }

    getHealth() {
        return this.health // получить здоровье юнита
    }

    setHealth(val) { // установить здоровье
             (val <= 0) 
        ? this.health = 0 
        :    (val >= 100) 
        ? this.health = 100
        : this.health = value;
    }

    timeRecharge() { // время перезарядки
        let time = Date.now();
        if (time - this.time > this.recharge) {
        this.startRecharge()
      } 
    }
}
