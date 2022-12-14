export interface Curso {
  id: number;
  nombre: string;
  comision: string;
  profesor: string;
  apellidoProfesor: string;
  fechaComienzo: Date;
  fechaFin: Date;
  inscripcionAbierta: boolean;
  imagen: string;
}
