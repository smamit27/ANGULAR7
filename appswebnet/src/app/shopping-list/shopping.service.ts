import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService {
    ingredientChange = new Subject<Ingredient[]>();
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
        this.ingredientChange.next(this.ingredient.slice());
    }
    addIngredient(ingredients: Ingredient[]) {
        this.ingredient.push(...ingredients);
        this.ingredientChange.next(this.ingredient.slice());
    }

}