export default class Squad {
    constructor(type, units) {
        this.type = type
        this.units = units
    }

    attackSucces() {
        return this.units.reduce((a, b) => a * b.attackSucces(), 1) ** (1/this.units.length) // среднее геометрическое
    }

    damageRecieve(damage) {
        damage = damage / this.units.length // общий урон делим на количество юнитов в отряде
        this.units.forEach((i) => i.damageRecieve(damage)) // наносим урон каждому юниту
    }

    startRecharge() { // старт перезарядки
        let units = this.units.filter(el => el.isReady);
        units.forEach(el => {
          el.startRecharge();
        });
    }

    timeRecharge() { // время перезарядки
        let units = this.units.filter(el => !el.isReady);
        units.forEach(el => {
          el.timeRecharge();
        });
      }

    makeDamage() {
        return this.units.reduce((a, b) => a + b.makeDamage(), 0) // урон наносимый отрядом 
    }

    isAlive() { // живой ли отряд
        return this.units.some(el =>
         el.isAlive());
    }

    filterAliveUnits() {// фильтруем живых юнитов
        this.units = this.units.filter(unit => {
          return unit.isAlive();
        });
    }

    getPower() {
        return this.units.reduce((a, b) => a + b.getPower(), 0)// мощность отряда
    }

    incExpForUnits() {
        this.units.forEach(unit => unit.setExperience()) // добавляем каждому юниту опыт
    }
}