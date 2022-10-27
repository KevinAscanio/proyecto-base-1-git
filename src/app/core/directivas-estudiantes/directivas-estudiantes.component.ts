import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-estudiantes',
  templateUrl: './directivas-estudiantes.component.html',
  styleUrls: ['./directivas-estudiantes.component.css'],
})
export class DirectivasEstudiantesComponent implements OnInit {
  variable1: number = 3;
  variable2: number = 7;

  listaEstudiantes: Array<string> = [
    'michael',
    'toby',
    'meredith',
    'jim',
    'pam',
    'dwight',
  ];
  constructor() {}

  ngOnInit(): void {}
}
