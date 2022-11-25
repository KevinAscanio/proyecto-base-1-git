import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';
import { selectSesionActiva } from '../state/sesion.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdministradorGuard implements CanActivate {
  constructor(
    private sesion: SesionService,
    private router: Router,
    private store: Store<Sesion>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectSesionActiva).pipe(
      map((sesion: Sesion) => {
        if (sesion.usuarioActivo?.admin) {
          return true;
        } else {
          alert('No tiene permisos para acceder a este sitio');
          this.router.navigate(['inicio']);
          return false;
        }
      })
    );
  }
}
