import { compileDirectiveFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const samePasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const pass1 = control.get('contrasena');
  const pass2 = control.get('contrasenaConfirm');
  return pass1 && pass2 && pass1.value === pass2.value
    ? null
    : { passwordsDontMatch: true };
};

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
})
export class FormularioReactivoComponent implements OnInit {
  formularioEstudiante: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioEstudiante = fb.group(
      {
        nombre: new FormControl('', [Validators.required]),
        correo: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'),
        ]),
        contrasena: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^.*[A-Z]+.*$'),
        ]),
        contrasenaConfirm: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^.*[A-Z]+.*$'),
        ]),
        administrador: new FormControl('', []),
      },
      { validators: samePasswordValidator }
    );
  }

  ngOnInit(): void {}

  agregarEstudiante() {
    console.log(this.formularioEstudiante);
    const contrasena1 = this.formularioEstudiante.value.contrasena;
    const contrasena2 = this.formularioEstudiante.value.contrasenaConfirm;
  }
}
