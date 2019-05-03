import fs from 'fs';
import {Battle} from "./core/battle";
import ArmyFactory from './factory/army-factory';

export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));
    const armiesFactory = ArmyFactory.getInstance()
    const arrArmies = armiesFactory.createArmies(json.armies)
    const battle = new Battle(arrArmies);
    battle.start();
  }
}
