import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RobotModel } from "../../models/robot-model";

@Component({
  selector: 'app-robots-grid',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './robots-grid.component.html',
  styleUrls: ['./robots-grid.component.css']
})
export class RobotsGridComponent implements OnInit {
  robots: RobotModel[];
  robotCount: number;
  objectKeys = Object.keys;

  constructor() { 
    if (localStorage.getItem('robotCount') !== undefined) {
      this.getRobots();
    } else {
      var _robots=[{name:"MrRobot",model:"2018",manufacturer:"China",attack:"500",defense:"400"},{name:"Gundam",model:"2020",manufacturer:"Japan",attack:"550",defense:"350"},{name:"El Roboto",model:"2019",manufacturer:"Guatemala",attack:"600",defense:"290"},{name:"Le Automate",model:"2016",manufacturer:"France",attack:"405",defense:"580"},{name:"Wall-e",model:"2008",manufacturer:"USA",attack:"100",defense:"200"}];
      this.robotCount = 0;
      _robots.forEach((robot, index) => {
        let newRobot: RobotModel = new RobotModel();
        for (let rKey in robot) {
          newRobot[rKey] = robot[rKey];        
        }
        localStorage.setItem('robot' + index.toString(), JSON.stringify(newRobot));
        this.robotCount++;
      });
      localStorage.setItem('robotCount', this.robotCount.toString());
      this.getRobots();
    }
  }

  ngOnInit() {
  }

  getRobots(): void{
    this.robots = [];
    let botAmount = localStorage.getItem('robotCount');
    
    for (let i = 0; i < +botAmount; i++) {
      let newRobot: RobotModel = new RobotModel(localStorage.getItem('robot' + i.toString()));
      this.robots.push(newRobot);
    }
  }
}


