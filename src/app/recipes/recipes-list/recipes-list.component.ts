import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() clickedRecipe = new EventEmitter<Recipe>();
 recipes: Recipe[]= [new Recipe("Rajma","Indian Famous Lentil",
 "https://upload.wikimedia.org/wikipedia/commons/6/6a/Rajma_Red_Kidney_Bean_dish_India.jpg"),
 new Recipe("Rajma","Indian Famous Lentil",
 "https://upload.wikimedia.org/wikipedia/commons/6/6a/Rajma_Red_Kidney_Bean_dish_India.jpg")
];
  constructor() { }

  ngOnInit() {
  }

  selectedRecipe(recipeEl){
    this.clickedRecipe.emit(recipeEl);
  }
}
