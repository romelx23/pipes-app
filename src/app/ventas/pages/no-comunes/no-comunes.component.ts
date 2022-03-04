import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent implements OnInit {
  // i18nSelect
  nombre: string = 'Romel';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    feminino: 'invitarla',
  };
  // i18nPlural
  clientes: string[] = ['María', 'Juan', 'Thom', 'Yanlui', 'Romel'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  constructor() {}

  ngOnInit(): void {}

  cambiarCliente() {
    this.nombre = 'Maria';
    this.genero = 'feminino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // keyValue Pipe
  persona = {
    nombre: 'Romel',
    edad: 28,
    direccion: 'Jr Tacna 2040',
  };

  heroe = [
    {
      nombre: 'Batman',
      edad: 28,
      direccion: 'Jr Tacna 2040',
    },
    {
      nombre: 'Superman',
      edad: 28,
      direccion: 'Jr Tacna 2040',
    },
    {
      nombre: 'Flash',
      edad: 28,
      direccion: 'Jr Tacna 2040',
    },
  ];
  // Async Pipe
  miObservable=interval(5000)//0,1,2,3,4,5...

  valorPromesa=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Tenemos data Hola'),3000)
  })
}
