import Unit from "./unit";
import randomInteger from "../helper";

export default class Soldier extends Unit {
    constructor(health, recharge) {
        super(health, recharge)
        this.experience = 0; // опыт солдата, изначально принимаем равным нулю
    }   

    getExperience() {
        return this.experience;// получить опыт
    }

    setExperience() { // рассчитываем опыт для солдата
        if(this.experience > 50) {
            this.experience = 50
        } else {
            this.experience += 1
        } 
    }

    attackSucces() {
        return 0.5 * (1 + this.health/100) * randomInteger(50 + this.experience, 100)/100 // вероятность успешной аттаки
    }

    makeDamage() {
        return (0.05 + this.experience/100)// урон наносимый солдатом
    }

    getPower() {
        return this.health + this.experience + this.makeDamage() // мощность солдата
    }

    damageRecieve(damage) { // полученный урон 
        this.health = this.health - damage
    }

    isAlive() {
        return (this.health > 0) ? true : false // живой ли солдат
    }
}
