import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RobotModel } from '../../models/robot-model';
import { RobotApiService } from '../../services/robot-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-robots-grid',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './robots-grid.component.html',
  styleUrls: ['./robots-grid.component.scss'],
})
export class RobotsGridComponent implements OnInit {
  robots: RobotModel[];
  robotCount: number;
  objectKeys = Object.keys;
  pageReady: boolean;

  constructor(private robotService: RobotApiService) {
    this.pageReady = false;
    this.getRobots();
  }

  ngOnInit() {}

  private showError(errorMessage): void {
    Swal.fire({
      title: 'Something went wrong',
      text: errorMessage,
      icon: 'error',
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
        this.showError(response);
      } else {
        this.robots = response;
      }
      this.pageReady = true;
    });
  }

  imagePath(robot: RobotModel): string {
    return 'assets/img/' + (robot.attack > robot.defense ? 'attack.png' : robot.attack < robot.defense ? 'defense.png' : 'overall.png');
  }

  showWarning(id): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Once deleted, you won't be able to recover the robot information!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
    }).then(result => {
      if (result.value) {
        this.pageReady = false;
        this.robotService.deleteRobot(id, (response: any, errorCode?: number) => {
          if (errorCode) {
            this.showError(response);
          } else {
            Swal.fire('Deleted!', 'The robot has been deleted.', 'success');
          }
          this.getRobots();
        });
      }
    });
  }
}
