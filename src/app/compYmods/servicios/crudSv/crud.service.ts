import { objSelec } from './../../../Interfaces/objSelec-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private peticion:HttpClient) { }


  public deleteSv(id:number,tipo:string):Observable<any>{
    let url=`http:noExisteEstaRutaSoloMaqueta/@api/${tipo}${id}`
    console.log(this.peticion.delete(url))
    return this.peticion.delete(url);
  }


}
