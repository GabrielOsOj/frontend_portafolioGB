import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

 
  constructor(private peticion:HttpClient) { }

  $resProyectos:Observable<any>=this.peticion.get("../../../../assets/mockParaPortafolio/proyectos.json");
  

}
