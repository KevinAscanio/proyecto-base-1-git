import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-agregar-cursos',
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css'],
})
export class AgregarCursosComponent implements OnInit {
  formulario: FormGroup;

  constructor(private cursoService: CursosService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('VueJS', [Validators.required]),
      comision: new FormControl(),
      profesor: new FormControl(),
      apellido: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      inscripcionAbierta: new FormControl(),
    });
  }

  agregarCurso() {
    const curso: Curso = {
      id: Math.round(Math.random() * 1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaComienzo: this.formulario.value.inicio,
      fechaFin: this.formulario.value.fin,
      profesor: this.formulario.value.profesor,
      apellidoProfesor: this.formulario.value.apellido,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    };
    console.log(curso);
    this.cursoService.agregarCursoR(curso);
    this.router.navigate(['cursos/listaCursadas']); // localhost/cursos/listar
  }
  ngOnInit(): void {}
}
