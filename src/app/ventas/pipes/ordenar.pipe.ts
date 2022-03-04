import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.Interfaces';

type Order = 'nombre' | 'color' | 'vuela' | '';

@Pipe({
  name: 'ordenar',
})

export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], ordenarPor: Order = ''): Heroe[] {
    if (ordenarPor == '') return [...heroes];
    const gato = [...heroes].sort((a, b) => (a[ordenarPor] > b[ordenarPor] ? 1 : -1));
    return gato;
  }
}
