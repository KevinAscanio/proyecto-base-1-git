import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';

const rutas: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'abm', component: AbmAlumnosComponent },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
