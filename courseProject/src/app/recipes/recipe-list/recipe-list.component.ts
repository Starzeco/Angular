import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg'),
    new Recipe('Przepyszna', 'Oj tak pyszna', 'http://static.wizaz.pl/kulinaria/photos/981_1_440x300.jpg'),
  ];

  @Output() chosen = new EventEmitter<Recipe>();    // MOGE TU UZYC ZNOWU EVENTU CHOSEN PONIEWAZ
                                                    // NIE MOZNA NASLUCHIWAC EVENTU DZIECKA DZIECKA CZYLI NIE MA POMIESZANIA NAZW
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipeEl: Recipe) {
    this.chosen.emit(recipeEl);
  }

}
