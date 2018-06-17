
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [new Recipe('Rajma', 'Indian Famous Lentil',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Rajma_Red_Kidney_Bean_dish_India.jpg',
      [new Ingredients ('Kidney Beans', 20),
        new Ingredients('Tomato', 2)]  ),
    new Recipe('Kadi', 'Indian Famous Lentil',
    'http://4.bp.blogspot.com/-j5J0vIBOy7Y/Vh6d7cD8idI/AAAAAAADt0g/CUPkSNXEmew/s1600/1.JPG',
        [new Ingredients('Gram Flour', 0.5),
         new Ingredients('Buttermilk', 1)])
   ];

   getRecipe() {
       return this.recipes.slice();
   }
}
