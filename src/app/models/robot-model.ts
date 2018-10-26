export class RobotModel {
  id: string;
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
    }
  }

  public toJSON() {
    let { id, name, model, manufacturer, attack, defense } = this;
    return { id, name, model, manufacturer, attack, defense };
  }
}