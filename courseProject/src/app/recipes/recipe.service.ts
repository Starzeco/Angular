import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg'
    , [
      new Ingredient('Meat', 1),
      new Ingredient('French Fires', 20)
      ]),
    new Recipe('Przepyszna', 'Oj tak pyszna', 'http://static.wizaz.pl/kulinaria/photos/981_1_440x300.jpg'
    , [
      new Ingredient('Kluski', 50),
        new Ingredient('Sos', 10)
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // użycie na tym slice()zwróci nam kopie tej listy,bez tego operowalibyśmy na referencji na prawdziwą liste
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());

  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  onDelete(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
