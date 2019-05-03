import SquadFactory from "./squad-factory";
import Army from "../models/army"
import StrategyFactory from "./strategy-factory";

let instance = null

export default class ArmyFactory {
    constructor() {
        if(instance) {
            return instance
        } else {
            instance = this
        }
    }

    static getInstance() {
        return new ArmyFactory
    }

    createArmy(data) {
        let squads = SquadFactory.getInstance()
        squads = squads.createSquads(data.squads);

        let strategy = StrategyFactory.getInstance()
        strategy = strategy.createStrategy(data.strategy);
        
        return new Army(squads, strategy, data.name)
    }

    createArmies(arr) {
        return arr.map((i) => this.createArmy(i))
    }
}