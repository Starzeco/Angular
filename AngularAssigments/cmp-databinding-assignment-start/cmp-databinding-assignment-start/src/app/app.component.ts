import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(numbero) {
    if (numbero % 2 === 0) {
      this.evenNumbers.push(numbero);
    } else {
      this.oddNumbers.push(numbero);
    }
  }

}