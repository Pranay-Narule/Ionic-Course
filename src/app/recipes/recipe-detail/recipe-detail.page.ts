import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activateRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    // a map all the parameter this route recives
    // this is observable which we can subscribe to get data
    // one time data like http rq or new data require from every event
    // below one emmits new data whenever id change
    // in subscribe we execite function when we recive new data
    this.activateRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
      // to use this in template we have to store it in property or class
    });
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Delete',
        handler: () => {
          this.recipeService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]}).then(alertEl =>{
        alertEl.present();
      });
  }

}
