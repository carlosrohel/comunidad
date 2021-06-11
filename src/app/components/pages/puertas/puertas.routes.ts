import { Routes } from '@angular/router';

//Componentes
import { PuertasContenedorComponent } from './puertas-contenedor/puertas-contenedor.component';
import { PuertasDetalleComponent } from './puertas-detalle/puertas-detalle.component';
import { PuertasListadoComponent } from './puertas-listado/puertas-listado.component';
import { PuertasNuevoEditarComponent } from './puertas-nuevo-editar/puertas-nuevo-editar.component';
import { UsuariosListadoComponent } from './usuarios-listado/usuarios-listado.component'
import { UsuariosNuevoEdtarComponent } from './usuarios-nuevo-edtar/usuarios-nuevo-edtar.component'


export const Puertas_ROUTES: Routes = [
    { path: 'Listado/:page', component: PuertasListadoComponent },
    { path: 'Nuevo', component: PuertasNuevoEditarComponent },
    { path: 'Editar/:id', component: PuertasNuevoEditarComponent },
    { path: 'Detalle/:id', component: PuertasDetalleComponent },
    { path: 'ListadoUsuarios/:page', component: UsuariosListadoComponent},
    { path: 'NuevoUsuario', component: UsuariosNuevoEdtarComponent},
    { path: 'EditarUsaurio/:id', component: UsuariosNuevoEdtarComponent},
    { path: '', pathMatch: 'full', redirectTo: 'Puertas/Listado/1' }
];