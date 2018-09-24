import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

import { RobotModel } from "../../models/robot-model";
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-robot-add',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './robot-add.component.html',
  styleUrls: ['./robot-add.component.css']
})
export class RobotAddComponent implements OnInit {
  objectKeys = Object.keys;
  robot: RobotModel;
  id: Guid;

  constructor(private router: Router) { 
    this.robot = new RobotModel();
  }

  ngOnInit() {
  }

  onSubmit() { 
    let botAmount = +localStorage.getItem('robotCount');
    
    localStorage.setItem('robot' + botAmount.toString(), JSON.stringify(this.robot));
    localStorage.setItem('robotCount', (++botAmount).toString());

    this.router.navigate(['/robots']);
  }
}
