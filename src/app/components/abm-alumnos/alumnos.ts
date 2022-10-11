export interface Alumno {
  nombre: string;
  apellido: string;
  edad: number;
  id: number;
}

export let listaAlumnos: Alumno[] = [
  {
    id: 1,
    nombre: 'Robin',
    apellido: 'Scherbatsky',
    edad: 27,
  },
  {
    id: 2,
    nombre: 'Lily',
    apellido: 'Aldrin',
    edad: 28,
  },
  {
    id: 3,
    nombre: 'Ted',
    apellido: 'Mosby',
    edad: 30,
  },
  { id: 4, nombre: 'Barney', apellido: 'Stinson', edad: 29 },
  {
    id: 5,
    nombre: 'Marshall',
    apellido: 'Ericksen',
    edad: 31,
  },
];
