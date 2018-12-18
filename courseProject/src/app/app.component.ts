import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded = 'recipe';  // TU moze byc cokolwiek, ale domyslnie chcemy, zeby wyswietlalo recipe bo jak zmienimy na pusty to nic nie bedzie

  onNavigate(selected: string) {
    this.loaded = selected;
  }
}
