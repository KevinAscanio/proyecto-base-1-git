import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  cursos: Curso[] = [
    {
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

  obtenercurso(): Curso[] {
    return this.cursos;
  }

  cursos$: Observable<Curso[]>;
  cursosSubject: Subject<Curso[]>;

  constructor() {
    this.cursosSubject = new Subject();
    this.cursos$ = new Observable<Curso[]>((suscriptor) => {
      suscriptor.next(this.cursos);

      setTimeout(() => {
        this.cursos.push({
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
}
