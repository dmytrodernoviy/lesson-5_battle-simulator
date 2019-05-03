import BaseStrategy from "../models/baseStrategy";
import randomInteger from "../helper";

export default class RandomStrategy extends BaseStrategy {
    constructor(type) {
        super(type)
    }

    target(assaulArmy, arrTarget) {
       let targetArmies = arrTarget.filter((army) => assaulArmy.name !== army.name)//находим потенциальные цели
       let targetArmy = targetArmies[randomInteger(0, targetArmies.length - 1)]// выбирае целевую армию

       let targetSquad = targetArmy.squads[randomInteger(0, targetArmy.squads.length - 1)]// выбираем целевой отряд
        return {targetArmy, targetSquad} // возвращаем значене в виде объекта с армией и целевый отрядом
    }
}