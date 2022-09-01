import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillSvService {

  constructor(private peticion:HttpClient) { }

  $resSkill:Observable<any>=this.peticion.get("../../../assets/mockParaPortafolio/skills.json");

  

}
