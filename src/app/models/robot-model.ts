export class RobotModel {
  id = '';
  name = '';
  model = '';
  manufacturer = '';
  attack = 1;
  defense = 1;

  constructor(robot?: any) {
    /* tslint:disable */
    if (robot) {
      const { id, name, model, manufacturer, attack, defense } = this;
      for (const rKey in { id, name, model, manufacturer, attack, defense }) {
        // Validates if the object that wants to be created contains all the fields
        if (!robot[rKey]) throw new TypeError('The received JSON is not a valid robot');
        this[rKey] = robot[rKey];
      }
    }
  }

  public toJSON() {
    const { id, name, model, manufacturer, attack, defense } = this;
    return { id, name, model, manufacturer, attack, defense };
  }
}
