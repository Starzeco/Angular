import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretPassword = 'tuna';
  showSecret = false;
  array = [];
  constructor() { }

  onToggle() {
    this.showSecret = !this.showSecret;
    /*this.array.push((this.array.length + 1));*/
    this.array.push(new Date());
  }
}
