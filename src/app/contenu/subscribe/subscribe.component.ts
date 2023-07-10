import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  pseudo: string = localStorage.getItem('pseudo') ?? '';

  constructor() { }

  ngOnInit() {
  }
  logOut(){
    localStorage.clear();
    window.location.reload();

  }

}
