import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SesionService } from 'src/app/core/services/sesion.service';
import { loadSesionActiva } from 'src/app/core/state/sesion.actions';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private store: Store<Sesion>
  ) {
    this.formulario = new FormGroup({
      usuario: new FormControl('kevin'),
      contrasena: new FormControl('ascanio'),
      admin: new FormControl(true),
    });
  }

  ngOnInit(): void {}

  login() {
    let u: Usuario = {
      id: 0,
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
    };
    this.router.navigate(['inicio']);
    this.sesionService.login(u).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadSesionActiva({ usuarioActivo: usuario }));
    });
  }
}
