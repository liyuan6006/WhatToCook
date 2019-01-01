import { Recipe } from './../recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipe: Recipe = {
  id: 1,
  name: 'kongpaojiding'
};
  constructor() { }

  ngOnInit() {
  }

}
