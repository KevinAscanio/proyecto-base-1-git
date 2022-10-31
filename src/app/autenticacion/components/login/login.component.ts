import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(private sesionService: SesionService, private router: Router) {
    this.formulario = new FormGroup({
      usuario: new FormControl('kevin'),
      contrasena: new FormControl('ascanio'),
      admin: new FormControl(true),
    });
  }

  ngOnInit(): void {}

  login() {
    this.sesionService.login(
      this.formulario.value.usuario,
      this.formulario.value.contrasena,
      this.formulario.value.admin
    );
    this.router.navigate(['inicio']);
  }
}
