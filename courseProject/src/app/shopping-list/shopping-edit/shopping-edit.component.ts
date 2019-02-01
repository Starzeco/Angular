import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientByIndex(index);
        this.shoppingListForm.setValue({
          nameo: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.nameo, value.amount);
    // Deklaracja stałej, bo chcemy zrobic zmienną no ale zeby sie nie zmieniala xD czyli zamiast let dajemy const izi
    // this.ingredientAdded.emit(newIngredient);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
      this.editMode = false;
    } else {
      this.shoppingListService.onAdd(newIngredient);
    }
    this.shoppingListForm.onReset();
  }
  onClear() {
    this.shoppingListForm.onReset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingListService.onDeleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
