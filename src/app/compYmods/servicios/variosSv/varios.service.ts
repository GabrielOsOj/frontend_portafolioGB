import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VariosService {
  constructor(private peticion: HttpClient) {}

  private readonly urlCrud = environment.urlCrudSv;

  $variosRes:Observable<any> = this.peticion.get(`${this.urlCrud}varios/get`);


  actualizarInfoSinFoto(body:object){
    let url=`${this.urlCrud}varios/editar`
    return this.peticion.put(url, body);
  }

  actualizarInfoConFoto(body:object){
    let url = `${this.urlCrud}varios/especial`
    return this.peticion.post(url,body);
  }
}
