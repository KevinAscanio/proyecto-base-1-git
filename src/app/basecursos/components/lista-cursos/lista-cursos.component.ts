import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>;

  constructor(private CursosService: CursosService, private router: Router) {}

  ngOnInit(): void {
    this.cursos$ = this.CursosService.obtenerCursos();
  }
  eliminarCurso(id: number) {
    this.CursosService.eliminarCursoR(id);
    this.cursos$ = this.CursosService.obtenerCursos();
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['cursos/editarCurso', curso]);
  }
}
