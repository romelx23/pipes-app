import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[]

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Rutas',
          icon: 'pi pi-desktop',
          items : [
              {label: 'Basico', icon: 'pi pi-plus', routerLink:'/basico'},
              {label: 'Numero', icon: 'pi pi-align-left', routerLink:'/numero'},
              {label: 'No-comunes', icon: 'pi pi-dollar', routerLink:'/no-comunes'}
          ],
        },
        {
          label:'Pipes Personalizados',
          icon: 'pi pi-cog',
          routerLink:'/ordenar'
        }
      
  ];
  }

}
