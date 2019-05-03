import VehicleFactory from './vehicle-factory';
import Squad from '../models/squad';
import SoldierFactory from './soldier-factory';

let instance = null;

export default class SquadFactory {
    constructor() {
        if(instance) {
            return instance
        } else {
            instance = this
        }
    }

    static getInstance() {
        return new SquadFactory
    }

    createSquad(data) {
        if(data.type === 'vehicles') {
            let vehicle = VehicleFactory.getInstance()
            return new Squad(data.type, vehicle.createVehicles(data.units))
        } else if(data.type === 'soldiers') {
            let soldiers = SoldierFactory.getInstance()
            return new Squad(data.type, soldiers.createSoldiers(data.units))
        }
    }

    createSquads(arr) {
        return arr.map((i) => this.createSquad(i))
    }
}