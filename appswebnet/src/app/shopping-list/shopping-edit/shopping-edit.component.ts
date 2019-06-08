import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef :ElementRef;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }
  onAddItem() {
    const nameInputRef = this.nameInputRef.nativeElement.value;
    const amountInputRef = this.amountInputRef.nativeElement.value;
    const newInputRef = new Ingredient(nameInputRef, amountInputRef)
    this.shoppingService.onAddShoppingItem(newInputRef);
  }

}
