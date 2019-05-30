import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService {
    ingredientChange = new EventEmitter<Ingredient[]>();
    private ingredient: Ingredient[] = [
        new Ingredient('Banana','20'),
        new Ingredient('Apple','10')
      ]
    getIngredient() {
        return this.ingredient.slice();
    }
    onAddShoppingItem(ingredient: Ingredient){
        debugger;
        this.ingredient.push(ingredient);
        this.ingredientChange.emit(this.ingredient.slice());
    }
    addIngredient(ingredients: Ingredient[]) {
        this.ingredient.push(...ingredients);
        this.ingredientChange.emit(this.ingredient.slice());
    }

}