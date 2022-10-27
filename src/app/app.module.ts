import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StudentComponent } from './core/components/student/student.component';
import { DirectivasEstudiantesComponent } from './core/directivas-estudiantes/directivas-estudiantes.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { CrearEstudianteDialogComponent } from './components/abm-alumnos/crear-estudiante-dialog/crear-estudiante-dialog.component';

import { AppRoutingModule } from './app.routing.module';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { InicioComponent } from './core/components/inicio/inicio.component';

import { AutenticacionRoutingModule } from './autenticacion/autenticacion-routing.module';
import { BasecursosModule } from './basecursos/basecursos.module';
import { BasecursosRoutingModule } from './basecursos/basecursos-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AbmAlumnosComponent,
    CrearEstudianteDialogComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AutenticacionRoutingModule,
    BasecursosRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BasecursosModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
