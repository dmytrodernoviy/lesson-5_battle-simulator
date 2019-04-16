import fs from 'fs';
import {Battle} from "./core/battle";
import Soldier from '../models/soldier';
import SoldierFactory from './factory/soldier-factory';


export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));

    let soldier = new Soldier(108, 2010)
    let factory = SoldierFactory.getInstance()
    console.log(factory)
    const battle = new Battle(json.armies);
    battle.start();
  }
}
