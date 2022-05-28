import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('A Test Receipe','Test',
    'https://image.shutterstock.com/image-vector/vector-illustration-raw-food-recipes-260nw-1899485773.jpg'),
    new Recipe('A Test Receipe2', 'Test2',
    'https://image.shutterstock.com/image-vector/vector-illustration-raw-food-recipes-260nw-1899485773.jpg'),
    new Recipe('A Test Receipe3','Test3',
    'https://image.shutterstock.com/image-vector/vector-illustration-raw-food-recipes-260nw-1899485773.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
