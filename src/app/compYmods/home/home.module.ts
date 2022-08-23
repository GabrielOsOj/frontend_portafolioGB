import { SkillsComponent } from './../componentes/skills/skills.component';
import { ProyectosComponent } from './../componentes/proyectos/proyectos.component';
import { PrincipalComponent } from './../componentes/principal/principal.component';
import { FooterComponent } from './../componentes/footer/footer.component';
import { ExperienciaComponent } from './../componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './../componentes/estudios/estudios.component';
import { ContactoComponent } from './../componentes/contacto/contacto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pagina/home.component';
import { HeaderComponent } from '../componentes/header/header.component';
import { PlantTarjetaComponent } from '../compCompartidos/plant-tarjeta/plant-tarjeta.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    EstudiosComponent,
    ExperienciaComponent,
    FooterComponent,
    PrincipalComponent,
    ProyectosComponent,
    SkillsComponent,
    HeaderComponent,
    PlantTarjetaComponent
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
