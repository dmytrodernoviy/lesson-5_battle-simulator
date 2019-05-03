import BaseStrategy from "../models/baseStrategy";

export default class StrongestStrategy extends BaseStrategy {
    constructor(type) {
        super(type)
    }

    target(assaulArmy, arrTarget) {
        let targetArmies = arrTarget.filter((army) => assaulArmy.name !== army.name)//находим потенциальные цели
        let targetArmy = targetArmies.sort((a, b) => a.getPower() - b.getPower())//ранжируем по возрастанию мощности армии
        targetArmy = targetArmy[targetArmy.length - 1] // берем самую сильную армию
        let targetSquad = targetArmy.squads.sort((a, b) => a.getPower() - b.getPower())// то же самое для отряда
        targetSquad = targetSquad[targetSquad.length - 1] 
        return {targetArmy, targetSquad}
    }
}