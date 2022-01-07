import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
