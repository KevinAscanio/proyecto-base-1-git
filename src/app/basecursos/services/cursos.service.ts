import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  Subject,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';

import { Curso } from '../../models/curso';

@Injectable()
export class CursosService {
  constructor(private http: HttpClient) {}

  obtenerCursos(): Observable<Curso[]> {
    return this.http
      .get<Curso[]>(`${environment.api}/cursos`)
      .pipe(catchError(this.manejarError));
  }

  obtenerCursoR(id: number): Observable<Curso> {
    return this.http
      .get<Curso>(`${environment.api}/cursos/${id}`)
      .pipe(catchError(this.manejarError));
  }

  agregarCursoR(curso: Curso) {
    this.http
      .post(`${environment.api}/cursos/`, curso, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          encoding: 'UTF-8',
        }),
      })
      .pipe(catchError(this.manejarError))
      .subscribe(console.log);
  }

  editarCursoR(curso: Curso) {
    this.http
      .put<Curso>(`${environment.api}/cursos/${curso.id}`, curso)
      .pipe(catchError(this.manejarError))
      .subscribe(console.log);
    alert(' Registro creado.');
  }
  eliminarCursoR(id: number) {
    this.http
      .delete<Curso>(`${environment.api}/cursos/${id}`)
      .pipe(catchError(this.manejarError))
      .subscribe(console.log);
    alert('Registro eliminado.');
  }

  obtenerCursoTest() {
    return this.http.get('https://635f44173e8f65f283af7124.mockapi.io/cursos');
  }

  private manejarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.warn('Error del lado del Usuario', error.error.message);
    } else {
      console.warn('Error 404 del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
