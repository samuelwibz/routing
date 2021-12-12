import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Recipes } from './recipes.model'

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipesService {

    private recipes: Recipes[] = [
        new Recipes(
            'Da Cow', 
            'A vegan FRIENDLY dish that all vegans can enjoy', 
            'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg', 
            [
                new Ingredient('Phat Cow', 2)

             ])
      ];

      constructor(private shoppingService: ShoppingListService){
   
      }

      getRecipes() {
          return this.recipes.slice(); //this gets an exact copy of the array above.
      }

      addIngredientsToShoppingListMethod(ingredients: Ingredient[]){
        this.shoppingService.addIngredients (ingredients);
      }

      getRecipe(index: number){
         return this.recipes[index];

         //Alternatively: return this.recipes.slice()[index]
      }

}