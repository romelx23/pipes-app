import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.Interfaces';

type Order='nombre' | 'color' | 'vuela' |'';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas:boolean=true
  ordenarPor:Order='nombre'

  heores:Heroe[]=[
    {
      nombre:'Batman',
      vuela:false,
      color:Color.Negro
    },
    {
      nombre:'Daredevil',
      vuela:true,
      color:Color.Rojo
    },
    {
      nombre:'Robin',
      vuela:false,
      color:Color.Verde
    },
    {
      nombre:'Superman',
      vuela:true,
      color:Color.Azul
    },
    {
      nombre:'Aquaman',
      vuela:false,
      color:Color.Azul
    }
  ]

  cambiarMayusculas(){
    this.enMayusculas=!this.enMayusculas
  }

  cambiarOrden(valor:Order){
    this.ordenarPor=valor
    console.log(valor)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
