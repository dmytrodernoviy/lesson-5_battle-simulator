export default class Army {
    constructor(squads, strategy, name) {
        this.squads = squads;
        this.strategy = strategy;
        this.name = name;
    }

    isAlive() {
        return this.squads.some(squad => squad.isAlive()); // живая ли армия
    }

    filterAliveSquads() {
        this.squads = this.squads.filter(squad => squad.isAlive()) // фильтурем живых юнитов
    }

    getPower() {
        return this.squads.reduce((a, b) => a + b.getPower(), 0)// мощность армии
    }
}