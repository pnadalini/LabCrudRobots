import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class RobotApiService {
  apiService: ApiService;

  getRobotList(callback: Function) {
    this.apiService.apiCall('GET', {}, function (response: any, errorCode?: number) {
      return callback(response, errorCode);
    })
  }

  constructor() {
    this.apiService = new ApiService();
  }
}
