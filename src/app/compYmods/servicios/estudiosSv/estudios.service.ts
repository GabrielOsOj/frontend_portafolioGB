import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private peticion:HttpClient) { }

  $resEstudios:Observable<any>=this.peticion.get("../../../../assets/mockParaPortafolio/estudios.json");
}
