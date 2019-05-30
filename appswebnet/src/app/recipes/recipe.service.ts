import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService { 
    reciveSelectList = new EventEmitter<Recipe>(); 
    private recipes: Recipe[] = [
        new Recipe('Banana recipe','banana recipe list','https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2018/07/1140-toasted-ravioli.imgcache.rev43a7d07e8218c031324a26e1b373a932.web.500.285.jpg'),
        new Recipe('Apple recipe','banana recipe list','https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2018/07/1140-toasted-ravioli.imgcache.rev43a7d07e8218c031324a26e1b373a932.web.500.285.jpg'),
        new Recipe('Orange recipe','banana recipe list','https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2018/07/1140-toasted-ravioli.imgcache.rev43a7d07e8218c031324a26e1b373a932.web.500.285.jpg'),
       
      ];
      getRecipe() {
          return this.recipes.slice();
      }
}