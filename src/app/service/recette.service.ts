import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Recette } from '../interface/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private http: HttpClient) { }

  getRecettes(): Observable<Recette[]> {
    return this.http.get<Recette[]>('https://food2fork.ca/api/recipe/search/?page=2',
      {
        headers: new HttpHeaders({ "Authorization": "Token 9c8b06d329136da358c2d00e76946b0111ce2c48"}),
        params: new HttpParams().set('query', 'beef carrot potato onion')
      }
    );
  }

  getRecette(): Observable<Recette> {
    return this.http.get<Recette>('https://food2fork.ca/api/recipe/get/?id=9',
      {
        headers: new HttpHeaders({ "Authorization": "Token 9c8b06d329136da358c2d00e76946b0111ce2c48" }),
        params: new HttpParams().set('query', 'beef carrot potato onion')
      }
    );
  }
}
