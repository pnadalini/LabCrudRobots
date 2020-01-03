import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { RobotModel } from '../models/robot-model';

@Injectable({
  providedIn: 'root',
})
export class RobotApiService {
  public robots: RobotModel[];
  private idRegex: RegExp;

  /**
   * Sends the robot to the API so its saved in the database
   * @param robot The robot object that wants to be saved in the database
   * @param callback Function that will return the result from the API pre-procesed
   */
  createRobot(robot: RobotModel, callback: (resp, errorCode) => void) {
    this.apiService.apiCall('POST', '', robot.toJSON(), (response: any, errorCode?: number) => {
      try {
        if (errorCode || !response) {
          // Manage error
          return callback('Unable to create a new robot:\n' + response, errorCode);
        } else {
          // Return a success message and add the robot in the list
          response.id = response._id;
          delete response._id;
          const newRobot: RobotModel = new RobotModel(response);
          if (!this.robots) this.robots = [newRobot];
          else this.robots.push(newRobot);
        }
        return callback(this.robots, errorCode);
      } catch (error) {
        return callback(error, 500);
      }
    });
  }

  /**
   * Method that will a robot matching the parameter id
   * @param id The id of the robot that wants to be searched
   */
  readRobot(id: string): any {
    if (id && !this.idRegex.test(id)) return { error: `The specified id: '${id}' is not valid` };
    // If the robot is in the list return the robot
    if (this.robots && this.robots.find(x => x.id === id)) return this.robots.find(x => x.id === id);
    return { error: `The robot with the specified id: '${id}' was not found` };
  }

  /**
   * Function that will call the API to get the list of robots from the database.
   * @param callback function that will return the result from the API pre-procesed
   */
  getRobotList(callback: (resp, errorCode) => void) {
    this.robots = [];
    this.apiService.apiCall('GET', '', {}, (response: any, errorCode?: number) => {
      try {
        if (errorCode || !response) {
          // Manage error
          return callback('Unable to fetch list of robots:\n' + response, errorCode);
        } else {
          // Save robots
          if (!Array.isArray(response)) {
            return callback('There was an error retrieving data from the DataBase', 500);
          }
          for (const i in response) {
            if (response.hasOwnProperty(i)) {
              const robot = response[i];
              robot.id = robot._id;
              delete robot._id;
              const newRobot: RobotModel = new RobotModel(robot);
              this.robots.push(newRobot);
            }
          }
        }
        return callback(this.robots, errorCode);
      } catch (error) {
        return callback(error, 500);
      }
    });
  }

  /**
   * Sends the robot to the API so it modifies the updated fields in the database
   * @param robot The robot object that wants to be saved in the database
   * @param id The id of the robot that wants to be searched
   * @param callback Function that will return the result from the API pre-procesed
   */
  updateRobot(robot: RobotModel, id: string, callback: (resp, errorCode) => void) {
    if (id && !this.idRegex.test(id)) return callback(`The specified id: '${id}' is not valid`, 400);
    this.apiService.apiCall('PUT', id, robot.toJSON(), (response: any, errorCode?: number) => {
      try {
        if (errorCode || !response) {
          // Manage error
          return callback(`Unable to update the robot with id: ${id}\n` + response, errorCode);
        } else {
          // Modifies the robot with the updated information
          this.robots.map(element => (element.id === id ? robot : element));
        }
        return callback(this.robots, errorCode);
      } catch (error) {
        return callback(error, 500);
      }
    });
  }

  /**
   * Sends the robot id to the API so it deletes the robot from the database
   * @param id The id of the robot that wants to be deleted
   * @param callback Function that will return the result from the API pre-procesed
   */
  deleteRobot(id: string, callback: (resp, errorCode) => void) {
    this.apiService.apiCall('DELETE', id, {}, (response: any, errorCode?: number) => {
      try {
        if (errorCode || !response) {
          // Manage error
          return callback(`Unable to delete the robot with id: ${id}\n` + response, errorCode);
        } else {
          // Deletes the robot from the list
          this.robots = this.robots.filter(robot => robot.id !== id);
        }
        return callback(this.robots, errorCode);
      } catch (error) {
        return callback(error, 500);
      }
    });
  }

  constructor(private apiService: ApiService) {
    this.idRegex = new RegExp('^[0-9a-fA-F]{24}$');
  }
}
