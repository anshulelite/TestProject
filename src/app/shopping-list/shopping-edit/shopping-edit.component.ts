import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName : ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;
  @Output() ingredient= new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit() {
  }
  
  addToShopping(){
    const name=this.inputName.nativeElement.value;
    const amount=this.inputAmount.nativeElement.value;
    this.ingredient.emit({'name': name, 'amount':amount})

  }

}
