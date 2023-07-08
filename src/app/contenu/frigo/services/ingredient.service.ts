import { Injectable } from '@angular/core';
import { Ingredient } from '../manage-fridge/manage-fridge.component';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private ingredientList: Ingredient[] = [
    new Ingredient('Ail', 10),
    new Ingredient('Oeufs', 5),
    new Ingredient('Gingembre', 3)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredientList;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredientList.push(ingredient);
  }

  updateIngredient(ingredient: Ingredient) {
    // Implémentez la logique pour mettre à jour un ingrédient existant dans la liste
  }

  deleteIngredient(ingredient: Ingredient) {
    // Implémentez la logique pour supprimer un ingrédient de la liste
  }
}
