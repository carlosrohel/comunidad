import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contrataciones-nuevo-editar',
  templateUrl: './contrataciones-nuevo-editar.component.html',
  styleUrls: ['./contrataciones-nuevo-editar.component.css']
})
export class ContratacionesNuevoEditarComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
    this.cargarDataFormulario();
  }

  ngOnInit(): void {
  }

  get fechaInicioNoValida() { return this.forma.get('fechaInicio').invalid && this.forma.get('fechaInicio').touched };
  get fechaFinNoValida() { return this.forma.get('fechaFin').invalid && this.forma.get('fechaFin').touched };
  get precioNoValida() { return this.forma.get('precio').invalid && this.forma.get('precio').touched };
  get estadoNoValida() { return this.forma.get('estado').invalid && this.forma.get('estado').touched };
  get servicioNoValida() { return this.forma.get('servicio').invalid && this.forma.get('servicio').touched };
  get ComunidadNoValida() { return this.forma.get('Comunidad').invalid && this.forma.get('Comunidad').touched };


  crearFormulario() {
    this.forma = this.fb.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['2021-05-20'],
      precio: ['12', Validators.required],
      estado: ['', Validators.required],
      servicio: ['asdfasf', Validators.required],
      Comunidad: ['asdfasdf', Validators.required]
    })
  }

  cargarDataFormulario(){

    this.forma.reset({
      fechaInicio: '2022-05-21',
      fechaFin: '2022-05-20',
      precio: '65465456',
      estado: 'Cancelado',
      servicio: 'eeeeeeeeeee',
      Comunidad: 'eeeeee'
    });
  }

  guardar() {
    
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
      })
    }

    // Posteo


    // resetear datos.
    // this.forma.reset
  }

}
