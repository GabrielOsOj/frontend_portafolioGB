import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdDelBTNComponent } from './compYmods/compCompartidos/crud-plants/updDel-plant/upd-del-btn/upd-del-btn.component';
import { CreateBTNComponent } from './compYmods/compCompartidos/crud-plants/create-plant/create-btn/create-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdDelBTNComponent,
    CreateBTNComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
