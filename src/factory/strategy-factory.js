import RandomStrategy from "../strategy/randomStrategy";
import StrongestStrategy from "../strategy/strongestStrategy";
import WeakestStrategy from "../strategy/weakestStrategy";

let instance = null;

export default class StrategyFactory {
    constructor() {
        if(instance) {
            return instance
        } else {
            instance = this
        }
    }

    static getInstance() {
        return new StrategyFactory
    }

    createStrategy(data) {
        if(data === "random") {
            return new RandomStrategy(data)
        } else if(data === "strongest") {
            return new StrongestStrategy(data)
        } else {
            return new WeakestStrategy(data)
        }
    }
}