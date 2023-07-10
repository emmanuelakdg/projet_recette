import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Recette } from '../interface/recette';
import { Result } from '../interface/result';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private http: HttpClient) { }

  getRecettes(query:any): Observable<Recette> {
    return this.http.get<Recette>('http://localhost/projet_recette/api/recettes.php?q='+query);
  }
 
 }
  // getRecette(id: number): Observable<Result> {
  //   return this.http.get<Result>('https://food2fork.ca/api/recipe/get',
  //     {
  //       headers: new HttpHeaders({ "Authorization": "Token 9c8b06d329136da358c2d00e76946b0111ce2c48" }),
  //       params: new HttpParams().set('query', 'beef carrot potato onion')
  //     }
  //   );
  // }
