import { Component } from '@angular/core';
import { IngredientService } from './../services/ingredient.service'

@Component({
  selector: 'app-manage-fridge',
  templateUrl: './manage-fridge.component.html',
  styleUrls: ['./manage-fridge.component.css']
})
export class ManageFridgeComponent {

  ingredientList: Ingredient[] = [
    new Ingredient('Ail', 10),
    new Ingredient('Oeufs', 5),
    new Ingredient('Gingembre', 3)
  ];

  constructor(private ingredientService: IngredientService) {
    this.ingredientList = this.ingredientService.getIngredients();
  }

  selectedIngredient: Ingredient | undefined = undefined;
  isAddingIngredient = false;
  newIngredientName = '';
  newIngredientQuantity = 0;

  startAddingIngredient() {
    this.selectedIngredient = undefined;
    this.isAddingIngredient = true;
    this.newIngredientName = '';
    this.newIngredientQuantity = 0;
  }

  onIngredientChange(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
    this.isAddingIngredient = false;
  }

  onAddOrUpdateIngredient() {
    if (this.isAddingIngredient) {
      // Ajouter un nouvel ingrédient
      const newIngredient = new Ingredient(this.newIngredientName.trim(), this.newIngredientQuantity);
      this.ingredientList.push(newIngredient);
      this.selectedIngredient = newIngredient;
      this.isAddingIngredient = false;
      this.newIngredientName = '';
      this.newIngredientQuantity = 0;
    } else {
      // Mettre à jour l'ingrédient existant
      if (this.selectedIngredient) {
        this.selectedIngredient.name = this.selectedIngredient.name.trim();
      }
    }
  }

  updateSelectedIngredientQuantity(event: any) {
    const value = event.target.value;
    const quantity = +value || 0;
    if (this.selectedIngredient) {
      this.selectedIngredient.quantity = quantity;
    }
  }
  

  onDeleteIngredient() {
    if (this.selectedIngredient) {
      // Supprimer l'ingrédient sélectionné
      const index = this.ingredientList.indexOf(this.selectedIngredient);
      if (index !== -1) {
        this.ingredientList.splice(index, 1);
      }
      this.selectedIngredient = undefined;
      this.isAddingIngredient = false;
    }
  }
}

export class Ingredient {
  constructor(public name: string, public quantity: number | null | undefined) {}
}

