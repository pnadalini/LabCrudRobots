export class RobotModel {
  id: string = "";
  name: string = "";
  model: string = "";
  manufacturer: string = "";
  attack: number = 1;
  defense: number = 1;

  constructor(robot?: any) {
    if (robot) {
      let { id, name, model, manufacturer, attack, defense } = this;
      for (let rKey in { id, name, model, manufacturer, attack, defense }) {
        if (!robot[rKey]) throw new TypeError('The received JSON isn not a valid robot');
        this[rKey] = robot[rKey];
      }
    }
  }

  public toJSON() {
    let { id, name, model, manufacturer, attack, defense } = this;
    return { id, name, model, manufacturer, attack, defense };
  }
}