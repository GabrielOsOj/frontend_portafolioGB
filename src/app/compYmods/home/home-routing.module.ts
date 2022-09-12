import { InfoComponent } from './../compCompartidos/plant-modales/info-modal/info.component';
import { ProyectoTmpComponent } from './../compCompartidos/plant-proyecto/proyecto-tmp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagina/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:"test",
    component: ProyectoTmpComponent
  },
  {
    path:"modalTest",
    component: InfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
