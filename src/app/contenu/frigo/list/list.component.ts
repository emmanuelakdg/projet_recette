import { Component, OnInit } from '@angular/core';
import { IngredientService } from './../services/ingredient.service';
import { Ingredient } from '../manage-fridge/manage-fridge.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ingredientList: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientList = this.ingredientService.getIngredients();
  }
}
