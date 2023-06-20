import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-del-ingr',
  templateUrl: './del-ingr.component.html',
  styleUrls: ['./del-ingr.component.css']
})
export class DelIngrComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
      
  }

  ingredientName: string = '';

  handleInputChange(event: any) {
    this.ingredientName = event.target.value;
    
  }

  
}
