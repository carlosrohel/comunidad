import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Rutas
import { RouterModule } from '@angular/router'
import { Puertas_ROUTES  } from './puertas.routes'

import { PuertasContenedorComponent } from './puertas-contenedor/puertas-contenedor.component';
import { PuertasListadoComponent } from './puertas-listado/puertas-listado.component';
import { PuertasDetalleComponent } from './puertas-detalle/puertas-detalle.component';
import { PuertasNuevoEditarComponent } from './puertas-nuevo-editar/puertas-nuevo-editar.component';
import { UsuariosListadoComponent } from './usuarios-listado/usuarios-listado.component';
import { UsuariosNuevoEdtarComponent } from './usuarios-nuevo-edtar/usuarios-nuevo-edtar.component';


@NgModule({
  declarations: [
  
    PuertasContenedorComponent,
       PuertasListadoComponent,
       PuertasDetalleComponent,
       PuertasNuevoEditarComponent,
       UsuariosListadoComponent,
       UsuariosNuevoEdtarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Puertas_ROUTES),
    ReactiveFormsModule
  ]
})
export class PuertasModule { }
