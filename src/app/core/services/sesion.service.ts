import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  sesionSubjecte!: BehaviorSubject<Sesion>;

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false,
    };
    this.sesionSubjecte = new BehaviorSubject(sesion);
  }

  login(usuario: string, contrasena: string, admin: boolean) {
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: {
        usuario: usuario,
        contrasena: contrasena,
        admin: admin,
      },
    };

    this.sesionSubjecte.next(sesion);
  }

  obtenerSesion(): Observable<Sesion> {
    return this.sesionSubjecte.asObservable();
  }
}
