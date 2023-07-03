import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  Nom: string = '';
  Prenom: string = '';
  Pseudo: string = '';
  Password: string = '';

  constructor() { }

  ngOnInit() {
  }

  handleNomChange(event: any) {
    this.Nom = event.target.value;
  }

  handlePrenomChange(event: any) {
    this.Prenom = event.target.value;
  }

  handlePseudoChange(event: any) {
    this.Pseudo = event.target.value;
  }

  handlePasswordChange(event: any) {
    this.Password = event.target.value;
  }

}
