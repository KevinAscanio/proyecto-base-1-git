import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  sesionSubjecte!: BehaviorSubject<Sesion>;

  constructor(private http: HttpClient, private router: Router) {
    const sesion: Sesion = {
      sesionActiva: false,
    };
    this.sesionSubjecte = new BehaviorSubject(sesion);
  }

  login(usuario: Usuario): Observable<Usuario> {
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter(
          (u: Usuario) =>
            u.usuario === usuario.usuario && u.contrasena === usuario.contrasena
        )[0];
      })
    );
  }

  obtenerSesion(): Observable<Sesion> {
    return this.sesionSubjecte.asObservable();
  }
}
