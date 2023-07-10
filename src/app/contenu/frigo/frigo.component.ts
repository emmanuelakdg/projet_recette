import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Ingredient } from './ingredients';
import { Router } from '@angular/router';


@Component({
  selector: 'app-frigo',
  templateUrl: './frigo.component.html',
  styleUrls: ['./frigo.component.css']
})
export class FrigoComponent implements OnInit {

  constructor(private service: ApiService,private router :Router) { 
   
  }

  ngOnInit() {
    this.getIngredients()  ;
  }
   
  ingredients: Ingredient[] = [];
  nom_ing: string = '';
  quantite: number = 0;
  erreurMessage: string = '';
  pseudo: string = localStorage.getItem('pseudo') ?? '';

  handleQuanhange(event: any) {
    this.quantite = event.target.value;
    console.log(this.quantite) ;
  }
  handleNom_ingChange(event: any) {
    this.nom_ing = event.target.value;
    console.log(this.nom_ing) ;

  }
  
    
  getIngredients(): void {
   
    this.service.getIngredients(this.pseudo).subscribe(
      (data: Ingredient[]) => {
        this.ingredients = data;
        this.erreurMessage = ''; 
      },
      error => {
        this.erreurMessage = "Erreur lors de la récupération des ingrédients.";
      }
    );
  }

  addIngredient(): void {
    const ingredient = new Ingredient(this.nom_ing, this.quantite);
    this.service.addIngredient(this.pseudo, ingredient.nom_ing,ingredient.quantite).subscribe(
      result => {
        console.log("Ingrédient ajouté avec succès.");
        this.nom_ing = '';
        this.quantite = 0;
        window.location.reload();
        this.erreurMessage = ''; 
      },
      error => {
       window.location.reload();
      }
    );
  }

  deleteIngredient(nom_ing: string): void {
    this.service.deleteIngredient(this.pseudo, nom_ing).subscribe(
      result => {
        console.log("Ingrédient supprimé avec succès.");
        window.location.reload();
        this.erreurMessage = ''; 
      },
      error => {
        window.location.reload();

      }
    );
  }
}

  

