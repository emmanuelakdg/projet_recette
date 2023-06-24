import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

  constructor(private recetteService: RecetteService) { }

  onGetRecettes(): void {
    this.recetteService.getRecettes().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log("Done getting recettes")
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

}
