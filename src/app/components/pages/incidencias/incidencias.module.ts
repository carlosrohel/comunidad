import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Rutas
import { RouterModule } from '@angular/router';
import { Incidencias_ROUTES } from './incidencias.routes'

import { IncidenciasContenedorComponent } from './incidencias-contenedor/incidencias-contenedor.component';
import { IncidenciasDetalleComponent } from './incidencias-detalle/incidencias-detalle.component';
import { IncidenciasListadoComponent } from './incidencias-listado/incidencias-listado.component';
import { IncidenciasNuevoEditarComponent } from './incidencias-nuevo-editar/incidencias-nuevo-editar.component';
import { ComentariosListadoComponent } from './comentarios-listado/comentarios-listado.component';
import { ComentariosNuevoEditarComponent } from './comentarios-nuevo-editar/comentarios-nuevo-editar.component';



@NgModule({
  declarations: [
    IncidenciasContenedorComponent,
    IncidenciasDetalleComponent,
    IncidenciasListadoComponent,
    IncidenciasNuevoEditarComponent,
    ComentariosListadoComponent,
    ComentariosNuevoEditarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Incidencias_ROUTES),
    ReactiveFormsModule
  ]
})
export class IncidenciasModule { }
