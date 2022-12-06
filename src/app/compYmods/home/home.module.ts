import { ImgRotaDirective } from './../../directivas/img-rota.directive';
import { ProyectosEditModalComponent } from './../compCompartidos/plant-modales/proyectos-edit-modal/proyectos-edit-modal.component';
import { EditComponent } from './../compCompartidos/plant-modales/editEstExp-modal/edit-modal.component';
import { CreateBTNComponent } from './../compCompartidos/crud-plants/create-plant/create-btn/create-btn.component';
import { UpdDelBTNComponent } from './../compCompartidos/crud-plants/updDel-plant/upd-del-btn/upd-del-btn.component';
import { ProyectoTmpComponent } from './../compCompartidos/plant-proyecto/proyecto-tmp.component';
import { EditSkillComponent } from './../compCompartidos/plant-modales/editSkills-modal/edit-skill.component';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanitizerPipe } from '../compCompartidos/pipes/sanitizer.pipe';



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
    EditComponent,
    UpdDelBTNComponent,
    CreateBTNComponent,
    EditSkillComponent,
    SanitizerPipe,
    ProyectosEditModalComponent,
    ImgRotaDirective
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, FormsModule],
})
export class HomeModule {}
