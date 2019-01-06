import { MessageService } from './message.service';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesUrl = 'api/recipes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  getRecipes(): Observable<Recipe[]> {
    this.log('fetched recipes');
    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(
      tap(_ => this.log('fetched recipes'))
      );
  }
  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url).pipe(
      tap(_ => this.log(`fetched recipe id=${id}`)),
    )
  }
  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe, httpOptions)
      .pipe(
      tap(_ => this.log(`updated recipe id =${recipe.id}`))
      )
  }
/** POST: add a new hero to the server */
addRecipe (recipe: Recipe): Observable<Recipe> {
  return this.http.post<Recipe>(this.recipesUrl, recipe, httpOptions).pipe(
    tap((recipe: Recipe) => this.log(`added recipe w/ id=${recipe.id}`))
  );
}

deleteRecipe(recipe:Recipe):Observable<Recipe>{
const id = typeof recipe==='number'?recipe:recipe.id;
const url = `${this.recipesUrl}/${id}`;
return this.http.delete<Recipe>(url,httpOptions).piep(
  tap(_=>this.log(`deleted recipe id =${id}`))
)
}
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RecipeService: ${message}`);
  }
}
