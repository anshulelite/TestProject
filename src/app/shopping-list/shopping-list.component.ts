import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredients[]=[
  new Ingredients("Banana",12),
  new Ingredients("Orange", 5)
]
  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient){
    this.ingredients.push(ingredient)
  }
}
