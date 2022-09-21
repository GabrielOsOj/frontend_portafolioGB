import { ProyectoTmpComponent } from './../compCompartidos/plant-proyecto/proyecto-tmp.component';
import { InfoComponent } from './../compCompartidos/plant-modales/info-modal/info.component';
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
import { PlantSkillComponent } from '../compCompartidos/plant-skill/plant-skill.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EdicionComponent } from '../compCompartidos/plant-modales/edit-modal/edicion/edicion.component';
import { NuevoComponent } from '../compCompartidos/plant-modales/nuevo-modal/nuevo/nuevo.component';

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
    PlantTarjetaComponent,
    PlantSkillComponent,
    ProyectoTmpComponent,
    InfoComponent,
    EdicionComponent,
    NuevoComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
