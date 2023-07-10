import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recette } from 'src/app/interface/recette';
import { Result } from 'src/app/interface/result';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  recettes!: Recette;
  results!: Result[];
  constructor(private recetteService: RecetteService,) { }
  query = localStorage.getItem('q')??'';

    
  onGetRecettes(): void {
    if ( localStorage.getItem('q') != null) {
      this.query = localStorage.getItem('q')??'';
    }
    this.recetteService.getRecettes(this.query).subscribe(
      (data: Recette) => {
        this.recettes = data;
        this.results = this.recettes.results;
      }
    );
  }

  ngOnInit() {          
    this.onGetRecettes();
  } 
  
  ngAfterViewInit(): void {
    var script1 = document.createElement('script');
    script1.src = "../../../assets/js/main.js";
    document.body.append(script1);
  }

  handleQueryChange(event: any) {
    this.query = event.target.value;
    localStorage.setItem('q',event.target.value) ;
  }


}
