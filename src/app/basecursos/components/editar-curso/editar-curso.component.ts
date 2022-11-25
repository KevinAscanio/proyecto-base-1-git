import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css'],
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;
  curso!: Curso;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.curso = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        comision: parametros.get('comision') || '',
        profesor: parametros.get('profesor') || '',
        apellidoProfesor: parametros.get('apellidoProfesor') || '',
        fechaComienzo: new Date(parametros.get('fechaComienzo') || ''),
        fechaFin: new Date(parametros.get('fechaFin') || ''),
        inscripcionAbierta: parametros.get('inscripcionAbierta') === 'true',
        imagen: parametros.get('imagen') || '',
      };
    });

    this.formulario = new FormGroup({
      nombre: new FormControl(this.curso.nombre, [Validators.required]),
      comision: new FormControl(this.curso.comision),
      profesor: new FormControl(this.curso.profesor),
      apellidoProfesor: new FormControl(this.curso.apellidoProfesor),
      fechaComienzo: new FormControl(this.curso.fechaComienzo),
      fechaFin: new FormControl(this.curso.fechaFin),
      inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),
    });
  }

  editarCurso() {
    let c: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      apellidoProfesor: this.formulario.value.apellidoProfesor,
      fechaComienzo: this.formulario.value.fechaComienzo,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: this.curso.imagen,
    };

    this.cursoService.editarCursoR(c);

    this.router.navigate(['cursos/listaCursadas']);
  }
}
