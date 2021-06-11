import { Routes } from '@angular/router';

//Componentes
import { CuentasContenedorComponent } from './cuentas-contenedor/cuentas-contenedor.component';
import { CuentasDetalleComponent } from './cuentas-detalle/cuentas-detalle.component';
import { CuentasListadoComponent } from './cuentas-listado/cuentas-listado.component';
import { CuentasNuevoEditarComponent } from './cuentas-nuevo-editar/cuentas-nuevo-editar.component';


export const Cuentas_ROUTES: Routes = [
    { path: 'Listado/:page', component: CuentasListadoComponent },
    { path: 'Nuevo', component: CuentasNuevoEditarComponent },
    { path: 'Editar/:id', component: CuentasNuevoEditarComponent },
    { path: 'Detalle/:id', component: CuentasDetalleComponent },
    { path: '', pathMatch: 'full', redirectTo: 'Cuentas/Listado/1' }
];