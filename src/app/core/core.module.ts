import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SesionService } from './services/sesion.service';
import { StudentComponent } from './components/student/student.component';
import { DirectivasEstudiantesComponent } from './directivas-estudiantes/directivas-estudiantes.component';
import { MaterialModule } from '../material.module';
import { StoreModule } from '@ngrx/store';
import { reducer, sesionFeatureKey } from './state/sesion.reducer';

@NgModule({
  declarations: [
    PaginaNoEncontradaComponent,
    InicioComponent,
    DirectivasEstudiantesComponent,
    StudentComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(sesionFeatureKey, reducer),
  ],
  providers: [SesionService],
})
export class CoreModule {}
