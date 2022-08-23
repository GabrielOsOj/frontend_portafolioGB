import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantTarjetaComponent } from '../compCompartidos/plant-tarjeta/plant-tarjeta.component';
import { HomeComponent } from './pagina/home.component';

const routes: Routes = [
  {
    path: 'H',
    component: HomeComponent,
  },
  {
    path:"test",
    component:  PlantTarjetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
