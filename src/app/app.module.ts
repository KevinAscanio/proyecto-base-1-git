import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentComponent } from './components/student/student.component';
import { DirectivasEstudiantesComponent } from './components/directivas-estudiantes/directivas-estudiantes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CursadasComponent } from './components/cursadas/cursadas.component';
import { BooleanTextoPipe } from './pipes/boolean-texto.pipe';
import { EstiloCabecerasDirective } from './directives/estilo-cabeceras.directive';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { CrearEstudianteDialogComponent } from './components/abm-alumnos/crear-estudiante-dialog/crear-estudiante-dialog.component';
import { ApellidosProfesorPipe } from './pipes/apellidos-profesor.pipe';
import { CursadasOptativasComponent } from './components/cursadas-optativas/cursadas-optativas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    DirectivasEstudiantesComponent,
    FormularioReactivoComponent,
    CursadasComponent,
    BooleanTextoPipe,
    EstiloCabecerasDirective,
    BooleanoEstiloDirective,
    AbmAlumnosComponent,
    CrearEstudianteDialogComponent,
    ApellidosProfesorPipe,
    CursadasOptativasComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
