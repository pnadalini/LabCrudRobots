import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RobotModel } from "../../models/robot-model";
import { RobotApiService } from "../../services/robot-api.service";
import swal from "sweetalert";

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
  pageReady: boolean;
  errorMessage: string;

  constructor(private robotService: RobotApiService) {
    this.pageReady = false;
    this.getRobots();
  }

  ngOnInit() {
  }

  resetRobots(): void {
    this.robotCount = 0;
    this.robots.forEach((robot, index) => {
      localStorage.setItem('robot' + index.toString(), JSON.stringify(robot));
      this.robotCount++;
    });
  }

  getRobots(): void {
    if (this.robotService.robots) {
      this.robots = this.robotService.robots;
      this.pageReady = true;
      return;
    }
    this.robotService.getRobotList((response: any, errorCode?: number) => {
      if (errorCode) {
        this.errorMessage = response;
      } else {
        this.robots = response;
      }
      this.pageReady = true;
    });
  }

  imagePath(robot: RobotModel): string {
    return 'assets/img/' + (robot.attack > robot.defense ? 'attack.png' : robot.attack < robot.defense ? 'defense.png' : 'overall.png');
  }

  showWarning(index): void {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you won't be able to recover the robot information!",
      icon: "warning",
      buttons: ["Cancel", "Ok"]
    }).then((willDelete) => {
      if (willDelete) {
        let botAmount = +localStorage.getItem('robotCount');
        localStorage.removeItem('robot' + (--botAmount));
        localStorage.setItem('robotCount', botAmount.toString());
        this.robots.splice(index, 1);
        this.resetRobots();
      }
    });
  }
}


