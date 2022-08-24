
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpSvService {
  constructor(private peticiones: HttpClient) {}

  $exp:Observable<any>=this.peticiones.get("../../../assets/mockParaPortafolio/experiencia.json");
 
}
