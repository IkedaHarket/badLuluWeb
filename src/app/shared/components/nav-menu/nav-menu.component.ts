import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  pages!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
      this.pages = [
        {label:'Inicio',url:'inicio'},
        {label:'Galeria',url:'/media'},
        {label:'Cuenta',url:'auth/login'},
      ]
  }
}
