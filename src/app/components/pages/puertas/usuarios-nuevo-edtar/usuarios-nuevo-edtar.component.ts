import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios-nuevo-edtar',
  templateUrl: './usuarios-nuevo-edtar.component.html',
  styleUrls: ['./usuarios-nuevo-edtar.component.css']
})
export class UsuariosNuevoEdtarComponent  {

  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
    // this.cargarDataFormulario();

   }

   get rolNoValido() { return this.forma.get('rol').invalid && this.forma.get('rol').touched }
   get puertaNoValida(){ return this.forma.get('puerta').invalid && this.forma.get('puerta').touched}

   crearFormulario(){
     this.forma = this.fb.group({
       rol: ['Administrador', Validators.required],
       puerta: ['', Validators.required]
     })

   }

   cargarDataFormulario(){
     this.forma.reset({
      puerta: '2B',
    })

   }

   guardar(){

    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
      });
    }

   }


}
