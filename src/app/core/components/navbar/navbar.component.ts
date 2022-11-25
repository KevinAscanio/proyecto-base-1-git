import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../services/sesion.service';
import { Store } from '@ngrx/store';
import { selectSesionActiva } from '../../state/sesion.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sesion$!: Observable<Sesion>;

  constructor(private store: Store<Sesion>) {}

  ngOnInit(): void {
    this.sesion$ = this.store.select(selectSesionActiva);
  }
}
