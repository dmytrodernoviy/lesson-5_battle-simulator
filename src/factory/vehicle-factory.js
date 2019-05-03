import Vehicle from '../models/vehicle'
import SoldierFactory from './soldier-factory';

let instance = null

export default class VehicleFactory {
    constructor() {
        if(instance) {
            return instance
        } else {
            instance = this
        }
    }

    static getInstance() {
        return new VehicleFactory
    }

    createVehicle(data) {
        let soldier = SoldierFactory.getInstance()
        return new Vehicle(data.health, data.recharge, soldier.createSoldiers(data.operators))
    }

    createVehicles(arr) {
        return arr.map((i) => this.createVehicle(i))
    }
}