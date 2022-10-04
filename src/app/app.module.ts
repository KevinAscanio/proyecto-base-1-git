import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentComponent } from './components/student/student.component';
import { DirectivasEstudiantesComponent } from './components/directivas-estudiantes/directivas-estudiantes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    DirectivasEstudiantesComponent,
    FormularioReactivoComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
