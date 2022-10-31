import { ProyectosEditModalComponent } from './../compCompartidos/plant-modales/proyectos-edit-modal/proyectos-edit-modal.component';
import { ProyectoTmpComponent } from './../compCompartidos/plant-proyecto/proyecto-tmp.component';
import { PlantTarjetaComponent } from './../compCompartidos/plant-tarjeta/plant-tarjeta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagina/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'test',
    component:ProyectoTmpComponent
  },
  {
    path:'editPro',
    component:ProyectosEditModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
