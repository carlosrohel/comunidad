import { Component } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incidencias-nuevo-editar',
  templateUrl: './incidencias-nuevo-editar.component.html',
  styleUrls: ['./incidencias-nuevo-editar.component.css']
})
export class IncidenciasNuevoEditarComponent {

  forma: FormGroup

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
    this.cargarDataFormulario();
  }


  get tituloNoValido(){ return this.forma.get('titulo').invalid && this.forma.get('titulo').touched}
  get progresoNoValido(){ return this.forma.get('progreso').invalid && this.forma.get('progreso').touched}
  get fechaFinNoValido(){ return this.forma.get('fechaFin').invalid && this.forma.get('fechaFin').touched}
  get fechaInicioNoValido(){ return this.forma.get('fechaInicio').invalid && this.forma.get('fechaInicio').touched}
  get descripcionNoValido(){ return this.forma.get('descripcion').invalid && this.forma.get('descripcion').touched}
  get puertasUsuarioNoValido(){ return this.forma.get('puertasUsuario').invalid && this.forma.get('puertasUsuario').touched}
  get estadoNoValido(){ return this.forma.get('estado').invalid && this.forma.get('estado').touched}
  
  crearFormulario() {
    this.forma = this.fb.group({
      titulo: ['', Validators.required],
      progreso: ['', Validators.required],
      fechaFin: [''],
      fechaInicio: ['', Validators.required],
      descripcion: [''],
      puertasUsuario: [''],
      estado: [''],
    });

  }

  cargarDataFormulario() {
    this.forma.reset({
        titulo: '',
        progreso: '',
        fechaFin: '',
        fechaInicio: '',
        descripcion: ' ',
        puertasUsuario: '',
        estado: ''
    })

  }

  guardar(){

    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
      })
    }
  }


}
