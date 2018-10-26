import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { RobotModel } from '../models/robot-model';

@Injectable({
  providedIn: 'root'
})
export class RobotApiService {
  public robots: RobotModel[];
  private idRegex: RegExp;

  createRobot(callback: Function) {

  }

  readRobot(id: string) : any {
    if (id && !this.idRegex.test(id))
      return { error: `The specified id: '${id}' is not valid` };
    // If the robot is in the list return the robot
    if (this.robots && this.robots.find(x => x.id == id))
      return this.robots.find(x => x.id == id);
    return { error: `The robot with the specified id: '${id}' was not found` };
  }

  getRobotList(callback: Function) {
    try {
      this.robots = [];
      this.apiService.apiCall('GET', '', {}, (response: any, errorCode?: number) => {
        if (errorCode) {
          // Manage error
          return callback('Unable to fetch list of robots:\n' + response, errorCode);
        } else {
          // Save robots
          if (!Array.isArray(response)) {
            return callback('There was an error retrieving data from the DataBase', 500);
          }
          for (let i in response) {
            let robot = response[i];
            let newRobot: RobotModel = new RobotModel();
            robot.id = robot._id;
            delete robot._id;
            for (let rKey in robot) {
              newRobot[rKey] = robot[rKey];
            }
            this.robots.push(robot);
          };
        }
        return callback(this.robots, errorCode);
      });
    } catch (error) {
      return callback('Unexpected error when contacting the server', 500);
    }
  }

  constructor(private apiService: ApiService) {
    this.idRegex = new RegExp('^[0-9a-fA-F]{24}$');
  }
}
