import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-estudiante-dialog',
  templateUrl: './crear-estudiante-dialog.component.html',
  styleUrls: ['./crear-estudiante-dialog.component.css'],
})
export class CrearEstudianteDialogComponent implements OnInit {
  formEstudiante: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    edad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
  });

  constructor(
    public dialogRef: MatDialogRef<CrearEstudianteDialogComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  guardar() {
    this.dialogRef.close(this.formEstudiante.value);
  }

  cancela() {
    this.dialogRef.close();
  }
}
