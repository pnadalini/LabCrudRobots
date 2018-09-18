import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { LayoutComponent } from "./ui/layout/layout.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { RobotsGridComponent } from './robots/robots-grid/robots-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotsGridComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    UiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent],
})

export class AppModule { }
