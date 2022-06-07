import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInputRef:ElementRef | any;

  @ViewChild('nameInput')
  amountInputRef:ElementRef | any;

  @Output()
  ingredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
