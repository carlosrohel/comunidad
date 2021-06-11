import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-puertas-nuevo-editar',
  templateUrl: './puertas-nuevo-editar.component.html',
  styleUrls: ['./puertas-nuevo-editar.component.css']
})
export class PuertasNuevoEditarComponent  {

  forma: FormGroup;

  constructor( private fb:FormBuilder) {
    this.crearFormulario();
    this.cargarDataFormulario();
  }

  get puertaNoValida(){ return this.forma.get('puerta').invalid && this.forma.get('puerta').touched }

  crearFormulario(){
    this.forma = this.fb.group({
      puerta: ['1A', Validators.required]
    })
  }

  cargarDataFormulario(){
    this.forma.reset({
      puerta: '2B'
    })

  }

  guardar(){
    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach( control => {
        control.markAsTouched();
      })
    }
  }
}
