import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipes: Recipe[];

selectedRecipe: Recipe;

onSelect(recipe: Recipe): void {
  this.selectedRecipe = recipe;
}
  constructor(private recipeService: RecipeService) {

  }

getRecipes(): void {
  this.recipeService.getRecipes()
  .subscribe(r => this.recipes = r);
}
  ngOnInit() {
    this.getRecipes();
  }

}
