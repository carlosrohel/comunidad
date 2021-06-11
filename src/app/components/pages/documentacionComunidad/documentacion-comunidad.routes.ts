import { Routes } from '@angular/router';

//Componentes
import { DocComContenedorComponent } from './doc-com-contenedor/doc-com-contenedor.component';
import { DocComDetalleComponent } from './doc-com-detalle/doc-com-detalle.component';
import { DocComListadoComponent } from './doc-com-listado/doc-com-listado.component';
import { DocComNuevoEditarComponent } from './doc-com-nuevo-editar/doc-com-nuevo-editar.component';


export const Documentacion_Comunidades_ROUTES: Routes = [
    { path: 'Listado/:page', component: DocComListadoComponent },
    { path: 'Nuevo', component: DocComNuevoEditarComponent },
    { path: 'Editar/:id', component: DocComNuevoEditarComponent },
    { path: 'Detalle/:id', component: DocComDetalleComponent },
    { path: '', pathMatch: 'full', redirectTo: 'DocumentacionComunidad/Listado/1' }
];