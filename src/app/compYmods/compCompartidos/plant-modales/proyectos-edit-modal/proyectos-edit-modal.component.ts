import { Subscription } from 'rxjs';
import { ProyectosService } from './../../../servicios/proyectosSv/proyectos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EditDeleteCreateService } from './../../../servicios/edit-delete-createSv/edit-delete-create.service';
import { proyectoIF } from './../../../../Interfaces/estandar-interface';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proyectos-edit-modal',
  templateUrl: './proyectos-edit-modal.component.html',
  styleUrls: ['./proyectos-edit-modal.component.css'],
})
export class ProyectosEditModalComponent implements OnInit {
  constructor(
    public EDCsv: EditDeleteCreateService,
    private proyectoSV: ProyectosService
  ) {}

  ngOnDestroy(): void {
    this.obsArr.forEach((s) => {
      s.unsubscribe();
    });
  }

  obsArr: Array<Subscription> = [];

  urlImagenes: string = environment.urlImagenes;

  editarProy: FormGroup = new FormGroup([]);

  estilos: Array<boolean> = [];
  elimiar: Array<number> = [];

  objSelect: proyectoIF = {
    descripcion: '',
    idImg: [],
    id: 0,
    titulo: '',
  };

  estilosArrLoad() {
    for (let i = 0; i < this.objSelect.idImg.length; i++) {
      this.estilos.push(false);
    }
  }

  ngOnInit(): void {
    this.loadData();
    this.estilosArrLoad();
    this.formEditInit();
    this.crearPformInit();
  }

  loadData() {
    let obs = this.EDCsv.$proyectoEdit.subscribe({
      next: (r) => {
        this.objSelect = r;
      },
    });
    this.obsArr.push(obs);
  }

  //eliminar proyecto
  eliminarP(id: number) {
    let img = this.proyectoSV.eliminarProyecto(id).subscribe({
      next: () => {
        window.location.reload();
      },
    });
    this.imgNuevaArr.push(img);
  }

  //editar proyecto
  formEditInit() {
    this.editarProy = new FormGroup({
      id: new FormControl(this.objSelect.id),
      titulo: new FormControl(this.objSelect.titulo),
      descripcion: new FormControl(this.objSelect.descripcion),
      idImg: new FormControl(),
    });
  }

  selectTo(id: number, index: number) {
    if (this.elimiar.includes(id)) {
      this.elimiar[index] = NaN;
    } else {
      this.elimiar[index] = id;
    }
    this.cambiadorLocal(this.estilos, index);
  }

  cambiadorLocal(array: Array<boolean>, indice: number) {
    array[indice] = !array[indice];
  }

  filtro(): Array<number> {
    let imgNotNull: Array<number> = [];
    this.elimiar.forEach((val) => {
      if (!isNaN(val)) {
        imgNotNull.push(val);
      }
    });
    return imgNotNull;
  }

  imgNuevaArr: Array<any> = [];

  cargarIMG(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.imgNuevaArr.push(event.target.files[i]);
    }
  }

  guardarCambios() {
    this.proyectoSV.editarProyectoSF(this.editarProy.value).subscribe();

    if (this.filtro().length > 0) {
      this.filtro().forEach((val) => {
        this.proyectoSV.eliminarIMG(val).subscribe();
      });
    }

    if (this.imgNuevaArr.length > 0) {
      this.imgNuevaArr.forEach((img) => {
        let formData = new FormData();

        formData.append('file', img);
        formData.append('id', this.objSelect.id.toString());

        this.proyectoSV.añadirIMG(formData).subscribe();
      });
    }

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  //crear proyecto

  crearP: FormGroup = new FormGroup([]);

  crearPformInit() {
    this.crearP = new FormGroup({
      Ntitulo: new FormControl(),
      Ndescripcion: new FormControl(),
    });
  }

  imgNuevas: Array<any> = [];

  cargarNuevasImg(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.imgNuevas.push(event.target.files[i]);
    }
  }

  guardarImagenes(r: number) {
    for (let i = 0; i < this.imgNuevas.length; i++) {
      
      let formData = new FormData();

      formData.append('id', r.toString());
      formData.append('file', this.imgNuevas[i]);

      if(i<this.imgNuevas.length-1){
        this.proyectoSV.añadirIMG(formData).subscribe();
      }else{
    
        this.proyectoSV.añadirIMG(formData).subscribe({
          next:()=>{
            window.location.reload();
          }
        });
      }

    }

    // this.imgNuevas.forEach((img) => {
    //   let formData = new FormData();

    //   formData.append('id', r.toString());
    //   formData.append('file', img);

    //   this.proyectoSV.añadirIMG(formData).subscribe();
    // });

  }

  formKeys(form: FormGroup): FormData {
    let formKeys = Object.keys(form.value);
    let formValues: Array<any> = Object.values(form.value);

    const fd = new FormData();

    formKeys.forEach((key, i) => {
      fd.append(key, formValues[i]);
    });

    return fd;
  }

  crearBTN() {
    this.proyectoSV.crearProyectoSF(this.formKeys(this.crearP)).subscribe({
      next: (r: number) => {
        this.guardarImagenes(r);
      },
    });
  }
}
