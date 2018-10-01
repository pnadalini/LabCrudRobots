import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

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

  constructor(private router: Router, private route: ActivatedRoute) {
    this.index = this.route.snapshot.paramMap.get('index');
    if (!!this.index && (!localStorage.getItem('robot' + this.index))) {
      // If the user wanted to edit an unexisting robot, redirect him to add page
      this.router.navigate(['/robots/add']);
    }
    this.robot = (!!this.index) ? new RobotModel(localStorage.getItem('robot' + this.index)) : this.robot = new RobotModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!!this.index) {
      localStorage.setItem('robot' + this.index, JSON.stringify(this.robot));
    } else {
      let botAmount = +localStorage.getItem('robotCount');

      localStorage.setItem('robot' + botAmount.toString(), JSON.stringify(this.robot));
      localStorage.setItem('robotCount', (++botAmount).toString());
    }
    this.router.navigate(['/robots']);
  }
}
