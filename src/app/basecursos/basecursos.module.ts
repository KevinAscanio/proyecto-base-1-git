import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasecursosRoutingModule } from './basecursos-routing.module';
import { CursadasComponent } from './components/cursadas/cursadas.component';
import { CursadasOptativasComponent } from './components/cursadas-optativas/cursadas-optativas.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosService } from './services/cursos.service';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { BooleanTextoPipe } from './pipes/boolean-texto.pipe';
import { EstiloCabecerasDirective } from './directives/estilo-cabeceras.directive';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';
import { ApellidosProfesorPipe } from './pipes/apellidos-profesor.pipe';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';

@NgModule({
  declarations: [
    CursadasComponent,
    CursadasOptativasComponent,
    ListaCursosComponent,
    AgregarCursosComponent,
    FormularioReactivoComponent,
    BooleanTextoPipe,
    EstiloCabecerasDirective,
    BooleanoEstiloDirective,
    ApellidosProfesorPipe,
    EditarCursoComponent,
  ],
  imports: [
    CommonModule,
    BasecursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [CursosService],
})
export class BasecursosModule {}