import { environment } from './../../../../environments/environment';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private peticion:HttpClient) { }

  private readonly urlCrudSv = environment.urlCrudSv;


  //Maqueta (comentar lo de arriva y descomentar esto)
  $resEstudios:Observable<any>=this.peticion.get(this.hasBackend(environment.modo_sin_backend));

  hasBackend(modoSinBackend:boolean){
    if(modoSinBackend==true){
      return '../../../../assets/mockParaPortafolio/estudios.json'
    }else{
      return `${this.urlCrudSv}estYexp/estudio`
    }
  }
}
