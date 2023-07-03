import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  Pseudo: string = '';
  Password: string = '';

  constructor() { }

  ngOnInit() {
  }

  handlePseudoChange(event: any) {
    this.Pseudo = event.target.value;
  }

  handlePasswordChange(event: any) {
    this.Password = event.target.value;
  }
}
