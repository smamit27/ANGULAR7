import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
@Injectable()
export class RecipeService {
  constructor(private shoppingService: ShoppingService) {}
  private recipes: Recipe[] = [
    new Recipe(
      "Banana recipe",
      "banana recipe list",
      'https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2018/07/1140-toasted-ravioli.imgcache.rev43a7d07e8218c031324a26e1b373a932.web.500.285.jpg',
      [new Ingredient("BB", "10BB"), new Ingredient("AA", "100AA")]
    ),
    new Recipe(
      "Apple recipe",
      "Apple recipe list",
      'https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2018/07/1140-toasted-ravioli.imgcache.rev43a7d07e8218c031324a26e1b373a932.web.500.285.jpg',
      [new Ingredient("CC", "10CC"), new Ingredient("DD", "100DD")]
    ),
    new Recipe(
      "Orange recipe",
      "Orange recipe list",
      'https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2018/07/1140-toasted-ravioli.imgcache.rev43a7d07e8218c031324a26e1b373a932.web.500.285.jpg',
      [new Ingredient("EE", "100EE"), new Ingredient("FF", "100FF")]
    )
  ];
  getRecipe() {
    return this.recipes.slice();
  }
  //Using in recipe detail component for fetching recipe array details
  getRecipes(index: number) {
    return this.recipes[index];
  }
  addIngedientToShoppingList(ingredient: Ingredient[]) {
    this.shoppingService.addIngredient(ingredient);
  }
}
