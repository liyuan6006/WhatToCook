import { RecipesComponent } from './recipes/recipes.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "src/app/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
{ path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
