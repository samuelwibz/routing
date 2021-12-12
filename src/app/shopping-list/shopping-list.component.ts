import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  private igChangeSubscription: Subscription;
  /*
  onShoppingListAdded(listElements: {elementName: string, elementAmount: number}) {
      this.ingredients.push(
        {
          name: listElements.elementName,
          amount: listElements.elementAmount
        }
      );
  }
  */
/*
  onShoppingListAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
  */

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
      this.ingredients = this.shoppingService.getIngredients();
      this.igChangeSubscription=this.shoppingService.ingredientsChanged.subscribe( //we are listening for changes in the ingredients array being sent by the emitter in the ShoppingListServices
        (ingredients:Ingredient []) => {
            this.ingredients = ingredients;
        }
      )
  }

  ngOnDestroy(){
    this.igChangeSubscription.unsubscribe();
  }

}
//name: this.itemNameInput.nativeElement.value, amount: this.itemNameInput.nativeElement.value

/*
this.accountService.statusUpdated.subscribe (
  (status:string) => alert ('New status: ' + status)
)
*/