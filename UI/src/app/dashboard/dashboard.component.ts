import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from "src/app/recipe";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }
getRecipes(): void {
  this.recipeService.getRecipes()
  .subscribe(re => this.recipes=re.slice(1,5));
}
  ngOnInit() {
    this.getRecipes();
  }

}
