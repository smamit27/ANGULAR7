import { Component, OnInit  } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipes(this.id);
    });

  }
  toAddShoppingList() {
    this.recipeService.addIngedientToShoppingList(this.recipe.ingredient);
  }
  toEditMode(){
    this.router.navigate(['edit'],{relativeTo: this.activatedRouter});

  }

}
