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

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(400),
      ]),
    });
  }

  goPlaces() {
    let { email, password } = this.loginFormGroup.value;

    this.lgs.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/','H'])
      },
      error: (e) => {
        console.log(e);
        this.resp = true;
      },
    });
  }
}
