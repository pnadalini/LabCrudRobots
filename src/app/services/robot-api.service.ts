import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { RobotModel } from '../models/robot-model';

@Injectable({
  providedIn: 'root'
})
export class RobotApiService {
  public robots: RobotModel[];
  private idRegex: RegExp;

  /**
   * Sends the robot to the API so its saved in the database
   * @param robot The robot object that wants to be saved in the database
   * @param callback Function that will return the result from the API pre-procesed
   */
  createRobot(robot: RobotModel, callback: Function) {
    try {
      this.apiService.apiCall('POST', '', robot.toJSON(), (response: any, errorCode?: number) => {
        try {
          if (errorCode) {
            // Manage error
            return callback('Unable to create a new robot:\n' + response, errorCode);
          } else {
            // Return a success message and add the robot in the list
            response.id = response._id;
            delete response._id;
            let newRobot: RobotModel = new RobotModel(response);
            if (!this.robots) 
              this.robots = [newRobot];
            else 
              this.robots.push(newRobot);
          }
          return callback(this.robots, errorCode);          
        } catch (error) {
          return callback(error, 500);
        }
      });
    } catch (error) {
      return callback('Unexpected error when contacting the server', 500);
    }
  }

  /**
   * Method that will a robot matching the parameter id
   * @param id The id of the robot that wants to be searched
   */
  readRobot(id: string): any {
    if (id && !this.idRegex.test(id))
      return { error: `The specified id: '${id}' is not valid` };
    // If the robot is in the list return the robot
    if (this.robots && this.robots.find(x => x.id == id))
      return this.robots.find(x => x.id == id);
    return { error: `The robot with the specified id: '${id}' was not found` };
  }

  /**
   * Function that will call the API to get the list of robots from the database.
   * @param callback function that will return the result from the API pre-procesed
   */
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
            robot.id = robot._id;
            delete robot._id;
            let newRobot: RobotModel = new RobotModel(robot);
            this.robots.push(newRobot);
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
