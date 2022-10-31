
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpSvService {
  constructor(private peticion: HttpClient) {}

  // "http://localhost:8080/"
  private readonly urlCrudSv= environment.urlCrudSv;
  
  $exp:Observable<any>= this.peticion.get(`${this.urlCrudSv}estYexp/experiencia`);

};
  

