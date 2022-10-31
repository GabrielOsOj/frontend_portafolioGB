import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor(private peticion: HttpClient) {}

  sendMS(Email: string, Ms: string): Observable<any> {
    
    const body = {
      Email,
      Ms,
    };

    //url del post de maqueta
    return this.peticion.post('http:post', body);
  }
}
