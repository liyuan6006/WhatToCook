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

  constructor(private recipeService: RecipeService) {

  }

getRecipes(): void {
  this.recipeService.getRecipes()
  .subscribe(r => this.recipes = r);
}

add(name:string):void{
name =name.trimLeft().trimRight();
if(!name) { return;}
this.recipeService.addRecipe({name} as Recipe)
.subscribe(recipe=>{
  this.recipes.push(recipe)
})
}

delete(recipe:Recipe):void{
  this.recipes=this.recipes.filter(h=>h!==recipe);
  this.recipeService.deleteRecipe(recipe)
  .subscribe()

}
  ngOnInit() {
    this.getRecipes();
  }

}
