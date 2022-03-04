import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower:string='romel';
  nombreUpper:string='ROMEL';
  nombreCompleto:string='rOMel AleXiS';
  fecha:Date=new Date(); //el día de hoy
  
  constructor() { }

  ngOnInit(): void {
  }

}
