import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredienrsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  onAdd(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredienrsChanged.next(this.ingredients.slice()); // Informujemy komponenty które słuchają o tym, że tablica w serwisie została
                                                                // zaktualizowana i przesyłamy najnowszą kopie
  }
  addIngredients(ingredients: Ingredient[]) {
    /*for (let ingredient of ingredients) { // TAK TEZ ZADZIALA
      this.onAdd(ingredient);
    }*/
    this.ingredients.push(...ingredients);    // ALE TAK LEPIEJ czyli ...Lista podzieli tam liste na pojedyncze
                                              // elementy z listy, a metoda push może przyjąc wiele elementow
    this.ingredienrsChanged.next(this.ingredients.slice());
  }
}
