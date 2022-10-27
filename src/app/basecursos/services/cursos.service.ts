import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';

import { Curso } from '../../models/curso';

@Injectable()
export class CursosService {
  cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Transpondedor',
      comision: '50223',
      profesor: 'Chandler',
      apellidoProfesor: 'Bing',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: true,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    },
    {
      id: 2,
      nombre: 'Paleontologia',
      comision: '40213',
      profesor: 'Ross',
      apellidoProfesor: 'Geller',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: false,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    },
    {
      id: 3,
      nombre: 'Diseño y Moda',
      comision: '30333',
      profesor: 'Rachel',
      apellidoProfesor: 'Green',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: true,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    },
    {
      id: 4,
      nombre: 'Masoterapia',
      comision: '20510',
      profesor: 'Phoebe',
      apellidoProfesor: 'Buffay',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: false,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    },
    {
      id: 5,
      nombre: 'Actuación',
      comision: '15021',
      profesor: 'Joey',
      apellidoProfesor: 'Tribiany',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: true,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    },
  ];

  cursosSubjecte: BehaviorSubject<Curso[]> = new BehaviorSubject(this.cursos);

  obtenercurso(): Curso[] {
    return this.cursos;
  }

  cursos$: Observable<Curso[]>;
  cursosSubject: Subject<Curso[]>;

  constructor() {
    this.cursosSubjecte = new BehaviorSubject<Curso[]>(this.cursos);
    this.cursosSubject = new Subject();
    this.cursos$ = new Observable<Curso[]>((suscriptor) => {
      suscriptor.next(this.cursos);

      setTimeout(() => {
        this.cursos.push({
          id: 6,
          nombre: 'Danza',
          comision: '16031',
          profesor: 'Janina',
          apellidoProfesor: 'Tribiany',
          fechaComienzo: new Date(2022, 0, 2),
          fechaFin: new Date(2022, 2, 29),
          inscripcionAbierta: true,
          imagen:
            'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
        });
        suscriptor.next(this.cursos);
      }, 3000);
    });
  }

  obtenerCursosPromise(): Promise<Curso[]> | any {
    return new Promise((resolve, reject) => {
      if (this.cursos.length > 0) {
        resolve(this.cursos);
      } else {
        reject({ codigo: 404, mensaje: 'Sin cursos actualmente' });
      }
    });
  }

  obtenerCursosObservables() {
    return this.cursos$;
  }

  agregarCurso(curso: Curso) {
    //this.cursos$.next();
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.cursosSubjecte.asObservable();
  }

  obtenerCursoR(id: number): Observable<Curso[]> {
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id))
    );
  }

  agregarCursoR(curso: Curso) {
    this.cursos.push(curso);
    this.cursosSubjecte.next(this.cursos);
  }

  editarCursoR(curso: Curso) {
    let indice = this.cursos.findIndex((c: Curso) => c.id === curso.id);

    if (indice > -1) {
      this.cursos[indice] = curso;
    }

    this.cursosSubjecte.next(this.cursos);
  }
  eliminarCursoR(id: number) {
    let indice = this.cursos.findIndex((c: Curso) => c.id === id);

    if (indice > -1) {
      this.cursos.splice(indice, 1);
    }

    this.cursosSubjecte.next(this.cursos);
  }
}
