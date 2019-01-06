import { Recipe } from 'src/app/recipe';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
createDb() {
    const recipes = [
      { id: 11, name: 'Ma Po Tofu' },
  { id: 12, name: 'Wontons' },
  { id: 13, name: 'Dumplings' },
  { id: 14, name: 'Chow Mein' },
  { id: 15, name: 'Peking Roasted Duck' },
  { id: 16, name: 'Spring Rolls' },
  { id: 17, name: 'Sweet and Sour Pork' },
  { id: 18, name: 'Kung Pao Chicken' },
  { id: 19, name: 'Peking Roasted Duck' },
  { id: 20, name: 'Spring Rolls' }
    ];
    return {recipes};
}
// Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 11;
  }
}
