import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuentas-nuevo-editar',
  templateUrl: './cuentas-nuevo-editar.component.html',
  styleUrls: ['./cuentas-nuevo-editar.component.css']
})
export class CuentasNuevoEditarComponent {

  forma: FormGroup;

  constructor( private fb: FormBuilder) {
    this.crearFormulario();
    this.cargarDataFormulario();
  }

  get fechaNoValido(){ return this.forma.get('fecha').invalid && this.forma.get('fecha').touched };
  get saldoNoValido(){ return this.forma.get('saldo').invalid && this.forma.get('saldo').touched };

  crearFormulario() {
    this.forma = this.fb.group({
      fecha: ['', Validators.required],
      saldo: ['', Validators.required],
    })
  }

  cargarDataFormulario(){
    this.forma.reset({
      fecha: '',
      saldo: '',
    });
  }

  guardar(){
    console.log(this.forma);
    
    if( this.forma.invalid){
      return Object.values(this.forma.controls).forEach( control => {
        control.markAsTouched();
      })
    }
  }

}
