import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private peticion: HttpClient) {}

  //cambiar a false
  $login: boolean = true;

  public login(email: string, password: string): Observable<any> {
    let body = {
      email,
      password,
    };
    //para maqueta, es una peticion get a un json estatico, cambia la
    //peticion a post y agrega el body de arriva junto a la url del backend
    return this.peticion
      .get('../../../../assets/mockParaPortafolio/login.json')
      .pipe(
        tap((res: any) => {
          const { valid, TokenSession } = res;
          this.$login = valid;
          sessionStorage.setItem('sessionToken', TokenSession);
        })
      );
  }
}
