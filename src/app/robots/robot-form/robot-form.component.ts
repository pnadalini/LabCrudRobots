import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ParamMap } from '@angular/router';

import { RobotModel } from "../../models/robot-model";
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-robot-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './robot-form.component.html',
  styleUrls: ['./robot-form.component.css']
})
export class RobotFormComponent implements OnInit {
  robot: RobotModel;
  id: Guid;
  isLoading: boolean = true;

  constructor(params: ParamMap) { 
    if (params.has('index')){
      // Update
      var currentIndex = params.get('index');
    }else {
      // Create
      this.robot = new RobotModel();

    }
    this.isLoading = false;
  }

  onSubmit() {
  }

  ngOnInit() {
  }

}
