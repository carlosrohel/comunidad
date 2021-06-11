import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doc-com-nuevo-editar',
  templateUrl: './doc-com-nuevo-editar.component.html',
  styleUrls: ['./doc-com-nuevo-editar.component.css']
})
export class DocComNuevoEditarComponent {

  forma: FormGroup;

  constructor( private fb: FormBuilder ) { 
    this.crearFormulario();
    this.cargarDataFormulario();
  }

  get tituloNoValido() { return this.forma.get('titulo').invalid && this.forma.get('titulo').touched };
  get fechaNoValido() { return this.forma.get('fecha').invalid && this.forma.get('fecha').touched };
  get tipoNoValido() { return this.forma.get('tipo').invalid && this.forma.get('tipo').touched };

  crearFormulario(){
    this.forma = this.fb.group({
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }


  cargarDataFormulario(){

    this.forma.reset({
      titulo: '',
      fecha: '2021-05-25',
      tipo: 'Acta'
    });
  }

  guardar(){
    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach(control=> {
        control.markAsTouched();
      })
    }
    
  }

}
