import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Login_url= "http://localhost/projet_recette/api/LUser.php"
  Register_url= "http://localhost/projet_recette/api/RUser.php"

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
   
  
}
