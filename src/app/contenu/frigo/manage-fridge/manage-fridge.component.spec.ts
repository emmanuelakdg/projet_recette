<div id="page" class="hfeed site">
  <div style="position: relative">
    <app-header></app-header>
  </div>
  <div class="manage">
    <select *ngIf="!isAddingIngredient" [(ngModel)]="selectedIngredient" (ngModelChange)="onIngredientChange($event)">
      <option *ngFor="let ingredient of ingredientList" [ngValue]="ingredient">{{ ingredient.name }}</option>
    </select>
    <button *ngIf="!selectedIngredient && !isAddingIngredient" (click)="startAddingIngredient()">Ajouter un ingrédient</button>
    <div *ngIf="isAddingIngredient || (selectedIngredient && !isAddingIngredient)">
      <input type="text" [(ngModel)]="newIngredientName" placeholder="Nom de l'ingrédient" *ngIf="isAddingIngredient">
      <input type="number" [(ngModel)]="newIngredientQuantity" placeholder="Quantité de l'ingrédient" *ngIf="isAddingIngredient">
      <button (click)="onAddOrUpdateIngredient()" *ngIf="isAddingIngredient">Ajouter</button>
      <button (click)="startAddingIngredient()" *ngIf="isAddingIngredient">Annuler</button>
      <input type="number" [value]="selectedIngredient?.quantity || 0"
        (input)="updateSelectedIngredientQuantity($event)" min="0" *ngIf="selectedIngredient && !isAddingIngredient">
      <button (click)="onAddOrUpdateIngredient()" *ngIf="selectedIngredient && !isAddingIngredient">Modifier</button>
      <button (click)="onDeleteIngredient()" *ngIf="selectedIngredient && !isAddingIngredient">Supprimer</button>
    </div>
  </div>
  <div class="foot">
    <app-footer></app-footer>
  </div>
</div>
