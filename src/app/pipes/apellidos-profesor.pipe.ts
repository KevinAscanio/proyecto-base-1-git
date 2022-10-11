import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apellidosProfesor',
})
export class ApellidosProfesorPipe implements PipeTransform {
  transform(value: unknown, apellido: string): string {
    return apellido;
  }
}
