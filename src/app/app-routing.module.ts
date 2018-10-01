import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { RobotsGridComponent } from './robots/robots-grid/robots-grid.component';
import { RobotAddComponent } from "./robots/robot-add/robot-add.component";
import { PageNotFoundComponent } from "./common/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'robots', component: RobotsGridComponent, pathMatch: 'full' },
  { path: 'robots/add', component: RobotAddComponent },
  { path: 'robots/edit/:index', component: RobotAddComponent },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
