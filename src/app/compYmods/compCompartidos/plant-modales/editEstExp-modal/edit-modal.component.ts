import { FormGroup, FormControl } from '@angular/forms';
import { estYexpIF } from './../../../../Interfaces/estandar-interface';
import { CrudService } from './../../../servicios/crudSv/crud.service';
import { EditDeleteCreateService } from './../../../servicios/edit-delete-createSv/edit-delete-create.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditComponent implements OnInit, OnDestroy {
  estOexpEdit: estYexpIF = {
    descripcion: '',
    url: '',
    id: 0,
    titulo: '',
  };

  estOexpForm: FormGroup = new FormGroup([]);
  hasNewImg: Boolean = false;

  constructor(
    public EDCsv: EditDeleteCreateService,
    public crud: CrudService
  ) {}

  ngOnDestroy(): void {
    this.hasNewImg = false;
    this.EDCsv.$tipo.next('');
  }

  ngOnInit(): void {
    this.estOexpLoad();
    this.formLoad();
    this.NformInit();
  }

  estOexpLoad() {
    this.EDCsv.$selectObj.subscribe({
      next: (objSelect) => {
        this.estOexpEdit = objSelect;
      },
    });
  }

  formLoad() {
    this.estOexpForm = new FormGroup({
      id: new FormControl(this.estOexpEdit.id),
      descripcion: new FormControl(this.estOexpEdit.descripcion),
      titulo: new FormControl(this.estOexpEdit.titulo),
      tipo: new FormControl(this.estOexpEdit.tipo),
      url: new FormControl(this.estOexpEdit.url),
    });
  }

  //funcionalidad de modales

  //modal de borrar
  eliminarDB(i: number) {
    this.crud.deleteSv(i).subscribe({
      next: () => {
        window.location.reload();
      },
    });
  }

  //modal para editar
  nuevaImg: Array<any> = [];

  imgNueva(e: any) {
    this.hasNewImg = true;
    this.nuevaImg.push(e.target.files[0]);
  }

  guardarDatos() {
    if (!this.hasNewImg) {
      this.crud.updateSv('estYexp', this.estOexpForm.value).subscribe({
        next: () => {
          window.location.reload();
        },
      });
    } else {
      let formKeys = Object.keys(this.estOexpForm.value);
      let formValues: Array<any> = Object.values(this.estOexpForm.value);

      const fd = new FormData();

      formKeys.forEach((key, i) => {
        fd.append(key, formValues[i]);
      });

      fd.append('file', this.nuevaImg[0]);

      this.crud.imgSv('estYexp', fd).subscribe({
        next: () => {
          window.location.reload();
        },
      });
    }
  }

  //modal para crear

  tipo: string = '';

  NestOexpForm: FormGroup = new FormGroup([]);

  NformInit() {
    this.EDCsv.$tipo.subscribe({
      next: (r) => {
        this.tipo = r;
      },
    });

    this.NestOexpForm = new FormGroup({
      Ntipo: new FormControl(this.tipo),
      Ntitulo: new FormControl(),
      Ndescripcion: new FormControl(),
    });
  }

  Nimg: Array<any> = [];

  cargarNimagen(e: any) {
    this.Nimg.push(e.target.files[0]);
  }

  crear() {
    if (this.Nimg.length < 1) {
      console.log(this.Nimg.length);
      throw console.error('NO HAY IMG!');
    }

    let formKeys = Object.keys(this.NestOexpForm.value);
    let formValues: Array<any> = Object.values(this.NestOexpForm.value);

    const fd = new FormData();

    formKeys.forEach((key, i) => {
      fd.append(key, formValues[i]);
    });

    fd.append('file', this.Nimg[0]);

    this.crud.createSv('estYexp', fd).subscribe({
      next: (r) => {
        window.location.reload();
      },
    });
  }
}
