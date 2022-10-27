import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursadas-optativas',
  templateUrl: './cursadas-optativas.component.html',
  styleUrls: ['./cursadas-optativas.component.css'],
})
export class CursadasOptativasComponent implements OnInit, OnDestroy {
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  suscripcion: any;
  map$!: any;
  promise!: any;

  constructor(private CursosService: CursosService) {
    console.log('Paso 1');

    this.promise = this.suscripcion = CursosService.obtenerCursosPromise()
      .then((valor: Curso[]) => {
        this.cursos = valor;
        console.log('desde el promise', valor);
      })
      .catch((error: any) => {
        console.error(error);
      });

    CursosService.obtenerCursosObservables().subscribe({
      next: (cursos: Curso[]) => {
        this.cursos = cursos;

        console.log('desde el observable', cursos);
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.cursos$ = CursosService.obtenerCursosObservables();
    console.log('paso 3');
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

  agregarCurso() {
    let curso: Curso = {
      id: 7,
      nombre: 'Negocios',
      comision: '15021',
      profesor: 'Barney',
      apellidoProfesor: 'Stinson AgregarCurso',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: true,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    };
    this.CursosService.agregarCurso(curso);
  }
  ngOnInit(): void {
    this.map$ = of(this.cursos)
      .pipe(
        map((cursos: Curso[]) =>
          cursos.filter((curso: Curso) => curso.nombre === 'Masoterapia')
        )
      )
      .subscribe((cursos) => {
        console.log('desde el of', cursos);
      });
  }
}
