import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { LayoutComponent } from "./ui/layout/layout.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { RobotsGridComponent } from './robots/robots-grid/robots-grid.component';
import { RobotFormComponent } from './robots/robot-form/robot-form.component';
import { RobotAddComponent } from './robots/robot-add/robot-add.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotsGridComponent,
    RobotAddComponent/*,
    RobotFormComponent*/
  ],
  imports: [
    NgbModule,
    BrowserModule,
    UiModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent],
})

export class AppModule { }
