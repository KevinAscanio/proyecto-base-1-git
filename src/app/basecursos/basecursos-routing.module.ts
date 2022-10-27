import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { CursadasOptativasComponent } from './components/cursadas-optativas/cursadas-optativas.component';
import { CursadasComponent } from './components/cursadas/cursadas.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';

const routes: Routes = [
  {
    path: 'cursos',
    children: [
      { path: 'agregarCursada', component: AgregarCursosComponent },
      { path: 'listaCursadas', component: ListaCursosComponent },
      { path: 'cursadas', component: CursadasComponent },
      { path: 'cursadasOptativas', component: CursadasOptativasComponent },
      { path: 'editarCurso', component: EditarCursoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasecursosRoutingModule {}
