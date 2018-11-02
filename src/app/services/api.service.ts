import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'http://localhost:3000/api/v1/robots/';

  /**
   * Data needed for the fetch call
   * @param method GET, POST, PUT or DELETE
   * @param data Data sent to the API
   */
  private fetchData(method: string, data: any) {
    return {
      method: method,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: method.toUpperCase() != 'GET' ? JSON.stringify(data) : undefined
    }
  }

  /**
   * Method to call the API 
   * @param method GET, POST, PUT or DELETE
   * @param urlParam Extra parameter of URL if needed
   * @param data Data sent to the API
   * @param callback Function with either the response or an error
   */
  public apiCall(method: string, urlParam: string, data: any, callback: Function) {
    fetch(this.apiUrl + urlParam, this.fetchData(method, data))
      .then(function (response) {
        if (response.status >= 400)
          return callback(response.statusText, response.status);

        if (response.status == 204)
          return callback(response.statusText);

        response.json().then(function (data) {
          callback(data);
        });
      })
      .catch(function (error) {
        console.log(error);
        callback(error);
      });
  }

  constructor() { }
}