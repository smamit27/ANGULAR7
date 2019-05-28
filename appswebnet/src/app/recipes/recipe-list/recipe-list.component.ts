import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() sendItemList = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Banana recipe','banana recipe list','https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2018/07/1140-toasted-ravioli.imgcache.rev43a7d07e8218c031324a26e1b373a932.web.500.285.jpg'),
    new Recipe('Apple recipe','banana recipe list','https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2018/07/1140-toasted-ravioli.imgcache.rev43a7d07e8218c031324a26e1b373a932.web.500.285.jpg'),
    new Recipe('Orange recipe','banana recipe list','https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2018/07/1140-toasted-ravioli.imgcache.rev43a7d07e8218c031324a26e1b373a932.web.500.285.jpg'),
   
  ];
  constructor() { }

  ngOnInit() {

  }
  reciveItemList(recipe:Recipe) {
    this.sendItemList.emit(recipe);
  }

}
