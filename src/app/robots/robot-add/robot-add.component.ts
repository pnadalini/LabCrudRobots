import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RobotApiService } from "../../services/robot-api.service";

import { RobotModel } from "../../models/robot-model";

@Component({
  selector: 'app-robot-add',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './robot-add.component.html',
  styleUrls: ['./robot-add.component.css']
})
export class RobotAddComponent implements OnInit {
  objectKeys = Object.keys;
  robot: RobotModel;
  index: string;
  id: string;
  pageReady: boolean;
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, private robotService: RobotApiService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!!this.id) {
      let response = this.robotService.readRobot(this.id);
      // If the user wanted to edit an unexisting robot, redirect him to add page
      if (response.error)
        this.router.navigate(['/robots/add']);
      this.robot = response;
    } else
      this.robot = new RobotModel();
      this.pageReady = true;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.pageReady = false;
    if (!!this.index) {
    } else {
      this.robotService.createRobot(this.robot, (response, errorCode) => {
        if (errorCode) {
          this.errorMessage = response;
        } else {
          this.router.navigate(['/robots']);
        }
        this.pageReady = true;
      });
    }
  }
}
