import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name ; 
    public description;
    public imagePath;
    public ingredient;

    constructor(name: string,
                description: string,
                imagePath: string,ingredient: Ingredient[]){
                    this.name = name;
                    this.description = description;
                    this.imagePath = imagePath;
                    this.name = name;
                    this.ingredient = ingredient
   
    }
}