import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean;

  title = 'IT255 PZ';

  ngOnInit() {
    this.loggedIn = sessionStorage.getItem('loggedIn') === '1';
  }
}
