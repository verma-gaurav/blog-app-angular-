import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private location: Location) {}
  title = 'blog-app';
  router = false;
  checkRoute = () => {
    this.router =
      this.location.path() === '' || this.location.path() === '/login';
  };
}
