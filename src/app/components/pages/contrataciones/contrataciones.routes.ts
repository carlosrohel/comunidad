import { Routes } from '@angular/router';

//Componentes
import { ContratacionesContenedorComponent } from './contrataciones-contenedor/contrataciones-contenedor.component';
import { ContratacionesDetalleComponent } from './contrataciones-detalle/contrataciones-detalle.component';
import { ContratacionesListadoComponent } from './contrataciones-listado/contrataciones-listado.component';
import { ContratacionesNuevoEditarComponent } from './contrataciones-nuevo-editar/contrataciones-nuevo-editar.component';


export const Contratacion_ROUTES: Routes = [
    { path: 'Listado/:page', component: ContratacionesListadoComponent },
    { path: 'Nuevo', component: ContratacionesNuevoEditarComponent },
    { path: 'Editar/:id', component: ContratacionesNuevoEditarComponent },
    { path: 'Detalle/:id', component: ContratacionesDetalleComponent },
    { path: '', pathMatch: 'full', redirectTo: 'Contrataciones/Listado/1' }
];