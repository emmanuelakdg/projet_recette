import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from 'src/app/interface/recette';
import { Result } from 'src/app/interface/result';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  id!: any
  recettes!: Recette;
  results!: Result[];
  single!: Result;

  constructor(private route: ActivatedRoute, private recetteService: RecetteService) { }

  onGetRecettes(): void {
    this.recetteService.getRecettes().subscribe(
      (data: Recette) => {
        this.recettes = data;
        this.results = this.recettes.results;
        this.single = this.results[this.id];
        console.log(this.single);
      }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('ingr');
    this.onGetRecettes();
  }
  

  ngAfterViewInit(): void {
    var script1 = document.createElement('script');
    script1.src = "../../../../assets/js/main.js";
    document.body.append(script1);
  }

}
