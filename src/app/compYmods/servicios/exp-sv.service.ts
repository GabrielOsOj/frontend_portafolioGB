import { expYest } from 'src/app/Interfaces/exp-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpSvService {
  constructor(private peticiones: HttpClient) {}

  $cosa:Observable<any>=this.peticiones.get("../../../assets/mockParaPortafolio/experiencia.json");
 
}
