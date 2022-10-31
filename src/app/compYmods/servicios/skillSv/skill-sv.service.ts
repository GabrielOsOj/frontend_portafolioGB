import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SkillsInterface } from 'src/app/Interfaces/skill-interface';

@Injectable({
  providedIn: 'root',
})
export class SkillSvService {
  constructor(private peticion: HttpClient) {}

  private readonly urlDb= environment.urlCrudSv;
  

  $resSkill: Observable<any> = this.peticion.get(
    `${this.urlDb}skills/get`
  );

  eliminarSkill(id:number):Observable<any>{
    let url= `${this.urlDb}skills/${id}`
    return this.peticion.delete(url)
  }

  editarSkill(body:SkillsInterface):Observable<any>{
    let url= `${this.urlDb}skills/editar`
    return this.peticion.put(url,body)

  }

  crearSkill(skill:SkillsInterface):Observable<any>{
    let url= `${this.urlDb}skills/nuevo`

    return this.peticion.post(url,skill)

  }


}
