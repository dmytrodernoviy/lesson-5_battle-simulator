import Unit from "./unit";
import randomInteger from "../helper";

export default class Vehicle extends Unit {
    constructor(health, recharge, operators) {
        super(health, recharge) // здоровье самого ТС отдельно
        this.TotalHealth = 100; // общее здоровье с учетом операторов, установим изначально 100 %
        this.operators = operators // массив объектов операторов
    }

    makeDamage() {
        return 0.1 + (this.operators.reduce((a, b) => a + b.getExperience(), 0) / 100) //нанесенный урон самим ТС
    }

    attackSucces() {
        let gavg = this.operators.reduce((a, b) => a * b.attackSucces(), 1) ** (1/this.operators.length) // среднее геометрическое
        return 0.5 * (1 + this.health/100) * gavg; // вероятность успешной аттаки
    }

    setTotalHealth() {
        this.TotalHealth = ((this.operators.reduce((a, c) => a + c.health, 0)/this.operators.length) + this.health) / 2; // задаем здоровье юнита
    }

    damageRecieve(damage) {
        this.setTotalHealth() // после каждой полученного урона считаем общее здоровье юнита
        this.health = this.health - damage * 0.6 // урон самому ТС
        if(this.operators.length === 1) return this.operators[0].health -= damage * 0.2;
        let randomOperator = randomInteger(0, this.operators.length - 1) // выбираем рандомного оператора ТС
        this.operators.forEach((operator) => operator.damageRecieve(damage * 0.1)) // наносим урон каждому солдату
        this.operators[randomOperator].health -= damage * 0.1// рандомному дополнительно еще 10 %, чтобы в сумме вышло 20 %
    }

    setExperience() {
        this.operators.forEach((i) => i.setExperience(1)) // увеличиваем опыт для каждого оператора после успешной атаки
    }

    isAlive() {
        return (this.TotalHealth > 0 && this.health > 0) ? true : false // живой ли юнит
    }

    getPower() {
        return this.operators.reduce((a, b) => a + b.getPower(), 0) // мощность юнита
    }
}