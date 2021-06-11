import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Cuentas_ROUTES } from './cuentas.routes';

import { CuentasContenedorComponent } from './cuentas-contenedor/cuentas-contenedor.component';
import { CuentasDetalleComponent } from './cuentas-detalle/cuentas-detalle.component';
import { CuentasListadoComponent } from './cuentas-listado/cuentas-listado.component';
import { CuentasNuevoEditarComponent } from './cuentas-nuevo-editar/cuentas-nuevo-editar.component';



@NgModule({
  declarations: [
    CuentasContenedorComponent,
    CuentasDetalleComponent,
    CuentasListadoComponent,
    CuentasNuevoEditarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Cuentas_ROUTES),
    ReactiveFormsModule
  ]
})
export class CuentasModule { }
