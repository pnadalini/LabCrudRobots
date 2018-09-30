import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<div id="notfound">
                  <div class="notfound">
                    <div class="notfound-404">
                      <h1>404</h1>
                    </div>
                    <h2>We are sorry, Page not found!</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <a class="btn btn-outline-secondary" routerLink="/home">Back To Homepage</a>
                  </div>
                </div>`,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
