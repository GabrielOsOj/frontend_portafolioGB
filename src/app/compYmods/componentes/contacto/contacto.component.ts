import { ContactoService } from './../../servicios/contactoSv/contacto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  formMS: FormGroup = new FormGroup({});

  constructor(private sendMS:ContactoService) {}

  ngOnInit(): void {
    this.formMS = new FormGroup(
      {
        email: new FormControl("",[Validators.email,Validators.required]),
        mensaje: new FormControl("",[Validators.required, Validators.minLength(5),Validators.maxLength(400)]),
      }
    );

  }

 
  public send():void{

    let {email,mensaje}=this.formMS.value
    this.sendMS.sendMS(email,mensaje)
  }
}
