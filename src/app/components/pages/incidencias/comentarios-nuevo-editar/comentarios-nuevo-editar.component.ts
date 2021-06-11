import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentarios-nuevo-editar',
  templateUrl: './comentarios-nuevo-editar.component.html',
  styleUrls: ['./comentarios-nuevo-editar.component.css']
})
export class ComentariosNuevoEditarComponent {

  forma: FormGroup;

  constructor( private fb: FormBuilder) {
    this.crearFormulario();
    this.cargarDataFormulario();
  }

  get comentarioNoValido(){ return this.forma.get('comentario').invalid && this.forma.get('comentario').touched }

  crearFormulario(){
    this.forma = this.fb.group({
      comentario: ['comentario', Validators.required]
    })
  }

  cargarDataFormulario(){
    this.forma.reset({
      comentario: 'comen'
    })
  }

  guardar(){
    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach(control =>{
        control.markAsTouched();
      })
    }
  }


}
