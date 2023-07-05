import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';

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
  wrongCredentials = false;


  constructor(private register: ApiService,private router :Router) { }

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

  sign(){
    this.wrongCredentials= false;
    this.register.register(this.Nom,this.Prenom,this.Pseudo,this.Password).subscribe(result=>{this.router.navigate(['/subscribe/login'])},error=>{this.wrongCredentials= true}) ;
  }
}
