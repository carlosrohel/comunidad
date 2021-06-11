import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Rutas hijas
import { RouterModule } from '@angular/router';
import { Documentacion_Comunidades_ROUTES } from './documentacion-comunidad.routes';

// Componentes
import { DocComContenedorComponent } from './doc-com-contenedor/doc-com-contenedor.component';
import { DocComDetalleComponent } from './doc-com-detalle/doc-com-detalle.component';
import { DocComListadoComponent } from './doc-com-listado/doc-com-listado.component';
import { DocComNuevoEditarComponent } from './doc-com-nuevo-editar/doc-com-nuevo-editar.component';

@NgModule({
  declarations: [
    DocComContenedorComponent,
    DocComDetalleComponent,
    DocComListadoComponent,
    DocComNuevoEditarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Documentacion_Comunidades_ROUTES),
    ReactiveFormsModule
  ]
})
export class DocumentacionComunidadModule { }
