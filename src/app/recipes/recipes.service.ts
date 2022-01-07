import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';


// this instance is used by all our rest page if this instance state changes then updated values are passed to each page
@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: '../../asset/recipe.jpg',
      ingredients: ['French Fries', 'Pork Meat']

    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'I:\Full Stack project\ionic\Ionic-Course\src\asset\recipe.jpg',
      ingredients: ['French Fries', 'Pork Meat']

    }
  ];


  constructor() { }

  getAllRecipes(){
    // this will pull out all current values and new values can be appendable to this
    return [...this.recipes];
  }

  getRecipe(recipeId: string){

    // takes function if return true then tell this our value
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
      })
    };
  }

}
