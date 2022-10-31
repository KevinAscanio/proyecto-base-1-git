import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';

import { CursadasComponent } from './components/cursadas/cursadas.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { AdministradorGuard } from '../core/guards/administrador.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agregarCursada',
        component: AgregarCursosComponent,
        canActivate: [AdministradorGuard],
      },
      { path: 'listaCursadas', component: ListaCursosComponent },
      { path: 'cursadas', component: CursadasComponent },

      { path: 'editarCurso', component: EditarCursoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasecursosRoutingModule {}
