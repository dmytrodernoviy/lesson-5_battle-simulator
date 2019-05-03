import BaseStrategy from "../models/baseStrategy";
import randomInteger from "../helper";

export default class WeakestStrategy extends BaseStrategy {
    constructor(type) {
        super(type)
    }

    target(assaulArmy, arrTarget) {
        let targetArmies = arrTarget.filter((army) => assaulArmy.name !== army.name)//находим потенциальные цели
        let targetArmy = targetArmies.sort((a, b) => a.getPower() - b.getPower())[0] //ранжируем по возрастанию мощности армии и берем самую слабую
        let targetSquad = targetArmy.squads.sort((a, b) => a.getPower() - b.getPower())[0]// то же самое для отряда
        return {targetArmy, targetSquad}
    }
}