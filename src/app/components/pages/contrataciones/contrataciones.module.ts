import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { Contratacion_ROUTES } from './contrataciones.routes';

import { ContratacionesContenedorComponent } from './contrataciones-contenedor/contrataciones-contenedor.component';
import { ContratacionesDetalleComponent } from './contrataciones-detalle/contrataciones-detalle.component';
import { ContratacionesListadoComponent } from './contrataciones-listado/contrataciones-listado.component';
import { ContratacionesNuevoEditarComponent } from './contrataciones-nuevo-editar/contrataciones-nuevo-editar.component';



@NgModule({
  declarations: [
    ContratacionesContenedorComponent,
    ContratacionesDetalleComponent,
    ContratacionesListadoComponent,
    ContratacionesNuevoEditarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Contratacion_ROUTES),
    ReactiveFormsModule
  ]
})
export class ContratacionesModule { }
