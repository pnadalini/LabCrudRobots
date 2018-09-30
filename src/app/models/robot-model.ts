import { Guid } from "guid-typescript";

export class RobotModel {
  id: Guid;
  name: string = "";
  model: string = "";
  manufacturer: string = "";
  attack: number = 0;
  defense: number = 0;

  constructor(jsonString?: string) {
    if (jsonString) {
      let robot = JSON.parse(jsonString);
      for (let rKey in robot) {
        this[rKey] = robot[rKey];
      }
    } else {
      this.id = Guid.create();
    }
  }

  public toJSON() {
    let { id, name, model, manufacturer, attack, defense } = this;
    return { id, name, model, manufacturer, attack, defense };
  }
}