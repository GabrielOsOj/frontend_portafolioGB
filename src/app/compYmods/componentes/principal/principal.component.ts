import { EditDeleteCreateService } from './../../servicios/edit-delete-createSv/edit-delete-create.service';
import { LoginService } from '../../servicios/loginSv/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { VariosService } from '../../servicios/variosSv/varios.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { varios } from 'src/app/Interfaces/estandar-interface';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  constructor(
    private variosSv: VariosService,
    private lgsv: LoginService,
    private EDCsv: EditDeleteCreateService
  ) {}
  
  status: boolean = false;
  isLogged: boolean = false;
  editForm: FormGroup = new FormGroup([]);
  urlImgs:string = environment.urlImagenes;
  ready: boolean = false;

  @ViewChild("input") input!:ElementRef; 

  datos: varios = {
    id: 0,
    nombre: '',
    titulo: '',
    descripcion: '',
    url: '',
  };

  imgEnBits?: File;

  ngOnInit(): void {
    this.load();
    this.hasLogged();
  }

  activarInp(){
    const elemento = this.input.nativeElement;
    elemento.click();
  }


  // modo edicion

  // modo edicion on/off
  hasLogged(): void {
    if (this.lgsv.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  //inicia el form de edicion de los datos de la pag de inicio
  formInit() {
    this.editForm = new FormGroup({
      id: new FormControl(1),

      nombre: new FormControl(this.datos.nombre, [
        Validators.minLength(1),
        Validators.required,
      ]),

      titulo: new FormControl(this.datos.titulo, [
        Validators.minLength(1),
        Validators.required,
      ]),

      descripcion: new FormControl(this.datos.descripcion, [
        Validators.minLength(1),
        Validators.required,
      ]),

      url: new FormControl(this.datos.url),
    });
  }


  //recibe los datos del sv
  load() {
    this.variosSv.$variosRes.subscribe({
      next: (r: any) => {
        this.datos = r[0];
        this.ready=true;
      },
    });

  }

  //abre y cierra el modal
  closeOpen() {
    this.EDCsv.cambiador(3,0)
    this.status = !this.status;
    this.formInit();
    if(this.status==false){
      this.imgLoad=[];
      this.hasNewPhoto=false;
    }
  }

  imgLoad: Array<string> = [];

  cargaImg(e: any) {
    this.imgLoad.push(e.target.files[0]);
    this.hasNewPhoto = true;
  }

  //dependiendo si se cambia o no la foto, se hace la peticion a una u otra
  //ruta
  hasNewPhoto: boolean = false;

  guardarDatos() {
    if (this.hasNewPhoto && this.imgLoad.length > 0) {
      let formKeys = Object.keys(this.editForm.value);
      let formValues: Array<any> = Object.values(this.editForm.value);

      const fd = new FormData();

      formKeys.forEach((key, i) => {
        fd.append(key, formValues[i]);
      });

      fd.append('file', this.imgLoad[0]);

      this.variosSv.actualizarInfoConFoto(fd).subscribe({
        next: () => {
          window.location.reload();
        },
      });
    } else {
      this.variosSv.actualizarInfoSinFoto(this.editForm.value).subscribe({
        next: () => {
          window.location.reload();
        },
      });
    } 
  }
}
