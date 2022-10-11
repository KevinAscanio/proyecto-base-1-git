import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-cursadas',
  templateUrl: './cursadas.component.html',
  styleUrls: ['./cursadas.component.css'],
})
export class CursadasComponent implements OnInit {
  cursos: Curso[] = [
    {
      nombre: 'Transpondedor',
      comision: '50223',
      profesor: 'Chandler',
      apellidoProfesor: 'Bing',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: true,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    },
    {
      nombre: 'Paleontologia',
      comision: '40213',
      profesor: 'Ross',
      apellidoProfesor: 'Geller',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: false,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    },
    {
      nombre: 'Diseño y Moda',
      comision: '30333',
      profesor: 'Rachel',
      apellidoProfesor: 'Green',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: true,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    },
    {
      nombre: 'Masoterapia',
      comision: '20510',
      profesor: 'Phoebe',
      apellidoProfesor: 'Buffay',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: false,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    },
    {
      nombre: 'Actuación',
      comision: '15021',
      profesor: 'Joey',
      apellidoProfesor: 'Tribiany',
      fechaComienzo: new Date(2022, 0, 2),
      fechaFin: new Date(2022, 2, 29),
      inscripcionAbierta: true,
      imagen:
        'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
    },
  ];

  columnas: string[] = [
    'nombre',
    'comision',
    'profesor',
    'fechaComienzo',
    'fechaFin',
    'inscripcionAbierta',
    'acciones',
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(
    this.cursos
  );

  constructor() {}

  ngOnInit(): void {}

  filtrarCursos(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (curso: Curso, filtro: string) {
      return curso.nombre
        .toLocaleLowerCase()
        .includes(filtro.toLocaleLowerCase());
    };

    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }
  filtrarComisiones(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (curso: Curso, filtro: string) {
      return curso.comision
        .toLocaleLowerCase()
        .includes(filtro.toLocaleLowerCase());
    };

    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }
}
