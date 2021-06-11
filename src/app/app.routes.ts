//Rutas y children
import { Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './components/auth/login/login.component';
import { DocComContenedorComponent } from './components/pages/documentacionComunidad/doc-com-contenedor/doc-com-contenedor.component';
import { CuentasContenedorComponent } from './components/pages/cuentas/cuentas-contenedor/cuentas-contenedor.component';
import { ContratacionesContenedorComponent } from './components/pages/contrataciones/contrataciones-contenedor/contrataciones-contenedor.component';
import { IncidenciasContenedorComponent } from './components/pages/incidencias/incidencias-contenedor/incidencias-contenedor.component';
import { PuertasContenedorComponent } from './components/pages/puertas/puertas-contenedor/puertas-contenedor.component';

//Rutas
import { Documentacion_Comunidades_ROUTES } from './components/pages/documentacionComunidad/documentacion-comunidad.routes';
import { Cuentas_ROUTES } from './components/pages/cuentas/cuentas.routes';
import { Contratacion_ROUTES } from './components/pages/contrataciones/contrataciones.routes';
import { Incidencias_ROUTES } from './components/pages/incidencias/incidencias.routes';
import { Puertas_ROUTES } from './components/pages/puertas/puertas.routes';

export const ROUTES: Routes = [
    { path: 'DocumentacionComunidad', component: DocComContenedorComponent, children: Documentacion_Comunidades_ROUTES },
    { path: 'Cuentas', component: CuentasContenedorComponent, children: Cuentas_ROUTES },
    { path: 'Contrataciones', component: ContratacionesContenedorComponent, children: Contratacion_ROUTES },
    { path: 'Incidencias', component: IncidenciasContenedorComponent, children: Incidencias_ROUTES },
    { path: 'Puertas', component: PuertasContenedorComponent, children: Puertas_ROUTES },
    { path: '', pathMatch: 'full', redirectTo: 'DocumentacionComunidad' },
    { path: '**', pathMatch: 'full', redirectTo: 'DocumentacionComunidad/Listado/1' }
];