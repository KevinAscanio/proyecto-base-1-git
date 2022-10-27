import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanTexto',
})
export class BooleanTextoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return args[0];
    } else {
      return args[1];
    }
  }
}
