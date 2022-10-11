import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { listaAlumnos, Alumno } from './alumnos';
import { CrearEstudianteDialogComponent } from './crear-estudiante-dialog/crear-estudiante-dialog.component';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css'],
})
export class AbmAlumnosComponent implements OnInit {
  dataInicial = listaAlumnos;

  ELEMENT_DATA = new MatTableDataSource<Alumno>();
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'acciones'];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataInicial;
  }

  borrar(id: number) {
    let position = this.dataInicial.findIndex((persona) => persona.id == id);
    this.dataInicial.splice(position, 1);
    this.ELEMENT_DATA.data = this.dataInicial;
  }

  openDialog() {
    let dialog = this.dialog.open(CrearEstudianteDialogComponent, {
      width: '50%',
      height: '50%',
    });

    dialog.afterClosed().subscribe((res) => {
      if (res == undefined) {
      } else {
        console.log(res);
        this.dataInicial.push({
          ...res,
          id: this.dataInicial.length + 1,
        });
        this.ELEMENT_DATA.data = this.dataInicial;
      }
    });
  }
}
