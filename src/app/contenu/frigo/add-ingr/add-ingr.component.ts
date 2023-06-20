import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ingr',
  templateUrl: './add-ingr.component.html',
  styleUrls: ['./add-ingr.component.css']
})
export class AddIngrComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
      
  }

  ingredientName: string = '';

  handleInputChange(event: any) {
    this.ingredientName = event.target.value;
    
  }

  total = 0;

  Increase() {
    if (this.total >= 0) {
      this.total += 1;
    }
  }

  Decrease() {
    if (this.total > 0) {
      this.total -= 1;
    }
  }

}
