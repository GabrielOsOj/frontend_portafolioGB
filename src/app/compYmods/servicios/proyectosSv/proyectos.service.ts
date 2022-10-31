import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private peticion:HttpClient) { }

  private readonly url = environment.urlCrudSv;

  $resProyectos:Observable<any>=this.peticion.get(`${this.url}proyectos/datos`);
  
  //datos sin foto
  crearProyectoSF(body:object):Observable<any>{
    return this.peticion.post(`${this.url}proyectos/crear`, body);
  }

  editarProyectoSF(body:object):Observable<any>{
    return this.peticion.put(`${this.url}proyectos/editarSF`,body)
  }

  eliminarProyecto(id:number){
    return this.peticion.delete(`${this.url}proyectos/eliminar/${id}`)
  }


  //imagenes
  añadirIMG(body:object){
    return this.peticion.post(`${this.url}imagen/crear`,body)
  }

  eliminarIMG(id:number){
    return this.peticion.delete(`${this.url}imagen/del/${id}`)
  }









}


