import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient[] = [
    new Ingredient('Banana','20'),
    new Ingredient('Apple','10'),


  ]
  constructor() { }

  ngOnInit() {
  }
  reciveShoppingData(event){
    debugger;
    this.ingredient.push(event);
  }

}
