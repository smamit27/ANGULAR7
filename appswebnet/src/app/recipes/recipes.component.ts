import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  reciveInListValue:Recipe;

  constructor() { }

  ngOnInit() {
  }
  reciveInListData(event) {
    if(event !== undefined && event !== ''){
      this.reciveInListValue = event;
    }
 
  }
}
