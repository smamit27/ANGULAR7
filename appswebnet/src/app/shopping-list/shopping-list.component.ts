import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredient = this.shoppingService.getIngredient();
    this.shoppingService.ingredientChange.subscribe((ingredient: Ingredient[])=> {
      this.ingredient = ingredient;
    })
  }
}
