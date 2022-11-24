import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { BasecursosModule } from './basecursos/basecursos.module';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';
import { AdministradorGuard } from './core/guards/administrador.guard';

const rutas: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [AutenticacionGuard],
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./basecursos/basecursos.module').then((m) => m.BasecursosModule),
    canActivate: [AutenticacionGuard],
  },
  {
    path: 'autenticacion',
    loadChildren: () =>
      import('./autenticacion/autenticacion.module').then(
        (m) => m.AutenticacionModule
      ),
  },
  {
    path: 'inscripciones',
    loadChildren: () =>
      import('./inscripciones/inscripciones.module').then(
        (m) => m.InscripcionesModule
      ),
    canActivate: [AutenticacionGuard],
  },
  {
    path: 'abm',
    component: AbmAlumnosComponent,
    canActivate: [AutenticacionGuard, AdministradorGuard],
  },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
