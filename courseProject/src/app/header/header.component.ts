import {Component, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() active = new EventEmitter<string>();

  onSelect(selected: string) {
    this.active.emit(selected); // On bedzie emitowal stringa tego, czyli zwracal inaczej
                                // mówiąc jak ktos kto nasluchuje tego to otrzyma tego stringa wlasnie
  }
}
