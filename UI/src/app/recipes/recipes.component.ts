import { RECIPES } from './../mock-recipes';
import { Recipe } from './../recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipes = RECIPES;

selectedRecipe: Recipe;

onSelect(recipe: Recipe): void {
  this.selectedRecipe = recipe;
}
  constructor() { }

  ngOnInit() {
  }

}
