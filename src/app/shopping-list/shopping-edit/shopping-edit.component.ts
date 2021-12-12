import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) itemNameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) itemAmountInput: ElementRef;
  @Output() shoppingListCreated = new EventEmitter<Ingredient> ();

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddShoppingItems(){
      //this.shoppingListCreated.emit({name: this.itemNameInput.nativeElement.value, amount: this.itemAmountInput.nativeElement.value});
      const newIngredient = new Ingredient (this.itemNameInput.nativeElement.value , this.itemAmountInput.nativeElement.value );
     // this.shoppingListCreated.emit(newIngredient);
     this.shoppingService.addToShoppingList(newIngredient);
  }

}
//constructor (name: string, amount: number){