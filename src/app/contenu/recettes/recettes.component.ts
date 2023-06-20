import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    var script1 = document.createElement('script');
    script1.src = "../../../assets/js/main.js";
    document.body.append(script1);
  }

}
