import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'

import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { BreadcrubsComponent } from './components/shared/breadcrubs/breadcrubs.component';
import { FooterComponent } from './components/shared/footer/footer.component';


import { AppComponent } from './app.component';
import { DocumentacionComunidadModule } from './components/pages/documentacionComunidad/documentacion-comunidad.module';
import { CuentasModule } from './components/pages/cuentas/cuentas.module';
import { ContratacionesModule } from './components/pages/contrataciones/contrataciones.module';
import { IncidenciasModule  } from './components/pages/incidencias/incidencias.module';
import { PuertasModule  } from './components/pages/puertas/puertas.module';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    NotFoundComponent,
    BreadcrubsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    DocumentacionComunidadModule,
    CuentasModule,
    ContratacionesModule,
    IncidenciasModule,
    PuertasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
