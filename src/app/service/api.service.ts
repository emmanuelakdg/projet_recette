import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../contenu/frigo/ingredients';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Login_url= "http://localhost/projet_recette/api/LUser.php"
  Register_url= "http://localhost/projet_recette/api/RUser.php"
  base_url =  "http://localhost/projet_recette/api/" ;

  constructor(private httpClient: HttpClient) {}

  login( pseudo:any,mot_de_passe:any){
     const logindata={
      pseudo: pseudo,
      mot_de_passe :mot_de_passe
     }
     return new Observable<boolean>((observer)=>{
      this.httpClient.post(this.Login_url,logindata).subscribe(
        result=>{observer.next(true);
          observer.complete() ;
        },error => {
          observer.error(false);
          observer.complete();
        }
      ) ;
     })
  }
  register( nom:any,prenom:any,pseudo:any,mot_de_passe:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const rdata={
     nom:nom,
     prenom:prenom,
     pseudo:pseudo,
     mot_de_passe:mot_de_passe
    }
    return new Observable<boolean>((observer)=>{
     this.httpClient.post(this.Register_url,rdata, { headers }).subscribe(
       result=>{observer.next(true);
         observer.complete() ;
       },error => {
         observer.error(false);
         observer.complete();
       }
     ) ;
    })
 }


  getIngredients(pseudo: string): Observable<Ingredient[]> {
    return this.httpClient.get<any[]>(this.base_url+"GFrigo?pseudo="+pseudo).pipe(
      map(data => {
        return data.map(item => new Ingredient(item.nom_ing, item.quantite));
      })
    );
  }
  addIngredient(pseudo: string, nom: string, quantite: number): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const data = {
      pseudo: pseudo,
      nom_ing: nom,
      quantite: quantite
    };
      return new Observable<boolean>((observer)=>{
      this.httpClient.post("http://localhost/projet_recette/api/AFrigo?add" ,data, { headers }).subscribe(
        result=>{observer.next(true);
          observer.complete() ;
        },error => {
          observer.error(false);
          observer.complete();
        }
      ) ;
     }) ;
  }
 
  deleteIngredient(pseudo: string, nom: string): Observable<boolean> {
    const data = {
      pseudo: pseudo,
      nom_ing: nom
    };
  
    return this.httpClient.post<boolean>(this.base_url+"DFrigo", data);
  }
  
  
  




 
   
  
}
