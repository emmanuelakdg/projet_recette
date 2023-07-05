import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  Pseudo: string = '';
  Password: string = '';
  wrongCredentials = false;

  constructor(private sessionLogin: ApiService,private router :Router ) { }

  ngOnInit() {
    
  }
  
  handlePseudoChange(event: any) {
    this.Pseudo = event.target.value;
  }

  handlePasswordChange(event: any) {
    this.Password = event.target.value;
  }
  login(){
    this.wrongCredentials= false;
    this.sessionLogin.login(this.Pseudo,this.Password).subscribe(result=>{localStorage.setItem('pseudo', this.Pseudo);this.router.navigate(['/'])},error=>{this.wrongCredentials= true}) ;
  }
}
