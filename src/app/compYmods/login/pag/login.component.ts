import { RouterState, Routes, RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goPlaces() {
    this.router.navigate(['/','H'])
  }


  //cuando hagas esto, volve a chusmear el tema de los suscribe, 
  //para ver si te desuscribis del sv que te trae el token del back;
  
}
