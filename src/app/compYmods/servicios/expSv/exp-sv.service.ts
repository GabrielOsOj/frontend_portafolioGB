
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { estYexpIF } from 'src/app/Interfaces/estandar-interface';

@Injectable({
  providedIn: 'root',
})
export class ExpSvService {
  constructor(private peticion: HttpClient) {}

  // "http://localhost:8080/"
  private readonly urlCrudSv= environment.urlCrudSv;
  

  $exp:Observable<any>= this.peticion.get(this.hasBackend(environment.modo_sin_backend));

  hasBackend(modoSinBackend:boolean):string{
    if(modoSinBackend==true){
      return '../../../../assets/mockParaPortafolio/experiencia.json'
    }else{
      return `${this.urlCrudSv}estYexp/experiencia`
    }
  }

};
  

