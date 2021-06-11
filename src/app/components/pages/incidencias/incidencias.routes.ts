import { Routes } from '@angular/router';

//Componentes
import { IncidenciasContenedorComponent } from './incidencias-contenedor/incidencias-contenedor.component';
import { IncidenciasDetalleComponent } from './incidencias-detalle/incidencias-detalle.component';
import { IncidenciasListadoComponent } from './incidencias-listado/incidencias-listado.component';
import { IncidenciasNuevoEditarComponent } from './incidencias-nuevo-editar/incidencias-nuevo-editar.component';
import { ComentariosNuevoEditarComponent  } from './comentarios-nuevo-editar/comentarios-nuevo-editar.component';


export const Incidencias_ROUTES: Routes = [
    { path: 'Listado/:page', component: IncidenciasListadoComponent },
    { path: 'Nuevo', component: IncidenciasNuevoEditarComponent },
    { path: 'Editar/:id', component: IncidenciasNuevoEditarComponent },
    { path: 'Detalle/:id', component: IncidenciasDetalleComponent },
    { path: 'Comentario/Nuevo', component: ComentariosNuevoEditarComponent },
    { path: 'Comentario/Editar/:id', component: ComentariosNuevoEditarComponent},
    { path: '', pathMatch: 'full', redirectTo: 'Incidencias/Listado/1' }
];