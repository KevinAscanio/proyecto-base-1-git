import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Router } from '@angular/router';
import { CursoState } from '../../../models/curso.state';
import { Store } from '@ngrx/store';
import {
  selectStateCargando,
  selectStateCursos,
} from '../../state/cursos.selectors';
import {
  loadCursosFailure,
  loadCursosSuccess,
} from '../../state/cursos.actions';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit, OnDestroy {
  cursos$!: Observable<Curso[]>;
  suscripcionCursos!: Subscription;
  cargando$!: Observable<boolean>;
  constructor(
    private CursosService: CursosService,
    private router: Router,
    private store: Store<CursoState>
  ) {
    this.cargando$ = this.store.select(selectStateCargando);
    this.cursos$ = this.store.select(selectStateCursos);
  }

  ngOnInit(): void {
    this.suscripcionCursos = this.CursosService.obtenerCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.store.dispatch(loadCursosSuccess({ cursos }));
      },
      error: (error: any) => {
        alert('Ocurrio un error');
        this.store.dispatch(loadCursosFailure(error));
      },
    });
  }

  ngOnDestroy(): void {
    this.suscripcionCursos.unsubscribe();
  }
  eliminarCurso(id: number) {
    this.CursosService.eliminarCursoR(id);
    this.cursos$ = this.CursosService.obtenerCursos();
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['cursos/editarCurso', curso]);
  }
}
