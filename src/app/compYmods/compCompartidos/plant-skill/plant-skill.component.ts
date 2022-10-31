import { LoginService } from './../../servicios/loginSv/login.service';
import { CrudService } from './../../servicios/crudSv/crud.service';
import { SkillsInterface } from './../../../Interfaces/skill-interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { SkillSvService } from '../../servicios/skillSv/skill-sv.service';

@Component({
  selector: 'app-plant-skill',
  templateUrl: './plant-skill.component.html',
  styleUrls: ['./plant-skill.component.css'],
})
export class PlantSkillComponent implements OnInit {
  ToF: Array<boolean> = [];

  @Input() skill: SkillsInterface = {
    idSkill: 0,
    nivel: 0,
    titulo: '',
  };

  isLogged: boolean = false;

  skillForm: FormGroup = new FormGroup([]);

  constructor(private lgsv: LoginService, private skillSV: SkillSvService) {}
  //falta implementar la peticion, arranca importando el crudSv

  ngOnInit(): void {
    this.hasLogged();

    this.valor(this.skill.nivel);

    this.formStart();
  }

  valor(val: number) {
    let numero = this.filtroVal(val);

    for (let i = 10; i <= 100; i += 10) {
      if (numero >= i) {
        this.ToF.push(true);
      } else {
        this.ToF.push(false);
      }
    }
  }

  filtroVal(val: number): number {
    if (val >= 101) {
      return 100;
    } else if (val <= -1) {
      return 0;
    }
    return val;
  }

  // modoEdicion

  //0: para los btn, 1: para los modales, 2: para el mod de edicion
  status: Array<boolean> = [true, false, false];

  formStart() {
    this.skillForm = new FormGroup({
      idSkill: new FormControl(this.skill.idSkill),

      titulo: new FormControl(this.skill.titulo),

      nivel: new FormControl(this.skill.nivel),
    });
  }

  //cierra el a y abre el b (como estandar personal, lo hago asi)
  closeOpen(a: number, b: number) {
    this.status[a] = !this.status[a];
    this.status[b] = !this.status[b];
  }

  //modo edicion on/off
  hasLogged(): void {
    if (this.lgsv.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  //funcionalidad del btn eliminar
  borrar(id: number) {
    this.skillSV.eliminarSkill(id).subscribe({
      next: () => {
        window.location.reload();
      },
    });
  }

  //funcionalidad del boton guardar
  guardar() {
    this.skillSV.editarSkill(this.skillForm.value).subscribe({
      next: () => {
        window.location.reload();
      },
    });
  }
}

//bien, ya esta implementado Y FUNCIONANDO el modo edicion para las skills
//falta:
//  tema login
//  tema edicion para los proyectos y los estudios
//  algun que otro detalle y pum, despliegue
//
