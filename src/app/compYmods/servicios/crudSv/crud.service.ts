import { environment } from './../../../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private peticion:HttpClient) { }


  // "http://localhost:8080/"
  private readonly urlCrudSv= environment.urlCrudSv;
  private readonly urlCrudIMGsv = environment.urlImagenes;

  public deleteSv(id:number):Observable<any>{
    let url=`${this.urlCrudSv}estYexp/${id}`
    return this.peticion.delete(url);
  }

  public updateSv(tipo:string,body:object){

    let url=`${this.urlCrudSv}${tipo}/editarSF`

    return this.peticion.put(url,body)
  }

  public createSv(tipo:string, body:object){
    let url=`${this.urlCrudSv}${tipo}/nuevo`
    
    return this.peticion.post(url, body)
  }

  public imgSv(tipo:string,body:object){ 

    let url=`${this.urlCrudSv}${tipo}/editarCF`
    
    return this.peticion.post(url, body)
  }

  public rutaImg(){
    return this.urlCrudIMGsv;
  }

}
