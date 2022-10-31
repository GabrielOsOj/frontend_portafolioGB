import { userTokken } from './../../../Interfaces/userTokken-interface';
import { environment } from './../../../../environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private peticion: HttpClient) {}

  urlBack: string = environment.urlCrudSv;

  public logStatus = false;

  public login(body: object): Observable<any> {
    return this.peticion.post(`${this.urlBack}login/iniciar`, body).pipe(
      tap((res: any) => {
        let tokken: userTokken = res;
        window.sessionStorage.setItem('id', tokken.id.toString());
        window.sessionStorage.setItem('tokken', tokken.tokken);
      })
    );
  }

  public getToken(): string {
    return sessionStorage.getItem('tokken')!;
  }

  public logOut() {
    this.peticion.get(`${this.urlBack}login/cerrarSession`).subscribe({
      next: () => {
        sessionStorage.removeItem('tokken');
        sessionStorage.removeItem('id');

        alert('Gracias por la edicion :D');
        window.location.reload();
      },
    });
  }
}
