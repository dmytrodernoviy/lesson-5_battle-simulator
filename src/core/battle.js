import randomInteger from "../helper";

export class Battle {
  armies = [];

  constructor(armies) {
    this.armies = armies;
  }

  aliveArmies() {
    this.armies = this.armies.filter(army =>
      army.isAlive());
  }

  start() {
    while(this.armies.length > 1) {
        let armies = this.armies;
        let assaultArmy = armies[randomInteger(0, armies.length - 1)] 
        let assaultSquad = assaultArmy.squads[randomInteger(0, assaultArmy.squads.length - 1)]
        let target = assaultArmy.strategy.target(assaultArmy, armies)
        let targetArmy = target.targetArmy;
        let targetSquad = target.targetSquad;

        if(assaultSquad.attackSucces() > targetSquad.attackSucces()) {
          
          let damage = assaultSquad.makeDamage()
          assaultSquad.startRecharge();
          targetSquad.damageRecieve(damage)
          assaultSquad.timeRecharge();
          assaultSquad.incExpForUnits()
          targetSquad.filterAliveUnits()
          targetArmy.filterAliveSquads()
          this.aliveArmies()
        }
      }
     console.log(this.armies[0].name + " is Winner")
  }
}
