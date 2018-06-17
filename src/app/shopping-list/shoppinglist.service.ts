import { Ingredients } from './../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredients[]>();
    private ingredients: Ingredients[] = [
        new Ingredients("Banana", 12),
        new Ingredients("Orange", 5)
    ]

    public getIngredients() {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    public addMultipleIngredients(ingredients: Ingredients[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
