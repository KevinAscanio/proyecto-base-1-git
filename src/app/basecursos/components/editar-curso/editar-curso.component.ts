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
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [
          Validators.required,
        ]),
        comision: new FormControl(parametros.get('comision')),
        profesor: new FormControl(parametros.get('profesor')),
        apellidoProfe: new FormControl(parametros.get('apellidoProfesor')),
        inicio: new FormControl(parametros.get('fechaComienzo')),
        fin: new FormControl(parametros.get('fechaFin')),
        inscripcionAbierta: new FormControl(
          parametros.get('inscripcionAbierta')
        ),
      });
    });
  }

  editarCurso() {
    let c: Curso = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      apellidoProfesor: this.formulario.value.apellido,
      fechaComienzo: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: '',
    };

    this.cursoService.editarCursoR(c);

    this.router.navigate(['cursos/listaCursadas']);
  }
}
