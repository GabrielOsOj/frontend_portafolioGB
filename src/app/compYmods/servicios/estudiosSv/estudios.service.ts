import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private peticion:HttpClient) { }

  private readonly url = environment.urlCrudSv;

  $resEstudios:Observable<any>=this.peticion.get(`${this.url}estYexp/estudio`);
}
