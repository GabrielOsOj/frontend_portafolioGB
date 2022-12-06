import { environment } from 'src/environments/environment';
import { LoginService } from './../../servicios/loginSv/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup = new FormGroup({});

  resp: boolean = false;

  constructor(private router: Router, private lgs: LoginService) {}

  activo:boolean= environment.modo_sin_backend;

  ngOnInit(): void {
    this.formInit();
    this.modoMaqueta(this.activo)
  }

  modoMaqueta(modoMaqueta:boolean){
    if(this.activo){
      console.warn("MODO MAQUETA ACTIVADO, para mas informacion lea en la documentacion la seccion de iniciar proyecto")
    }
  }


  formInit():void{
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      contraseña: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(400),
      ]),
    });
  }

  goPlaces(volverAlinicio:boolean) {
    
    if(volverAlinicio){
      this.router.navigate([''])
      return
    }

    this.lgs.login(this.loginFormGroup.value).subscribe({
      next: () => {
        this.router.navigate([''])
      },
      error: (e) => {
        console.log(e);
        this.resp = true;
      },
    });
  }
}
