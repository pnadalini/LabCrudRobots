import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { RobotsGridComponent } from './robots/robots-grid/robots-grid.component';
import { RobotAddComponent } from "./robots/robot-add/robot-add.component";
import { RobotFormComponent } from "./robots/robot-form/robot-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'robots', component: RobotsGridComponent, pathMatch: 'full' },
  { path: 'robots/add', component: RobotAddComponent}/*,
  { path: 'edit', component: RobotFormComponent},
  //{ path: 'edit/:index', component: RobotFormComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
