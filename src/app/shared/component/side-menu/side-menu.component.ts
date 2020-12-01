//package
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public itemMenu: any[] = [];

  constructor() {
    this.itemMenu = [
      {
        nome: 'Agendamentos',
        icone: 'icon-calendar',
        link: 'dashboard/agendamentos'
      },
      {
        nome: 'Casamentos',
        icone: 'icon-wending-1',
        link: 'dashboard/casamentos'
      },
      {
        nome: 'Vendas',
        icone: 'icon-comercial',
        link: 'dashboard/vendas'
      }
    ];

  }

  ngOnInit(): void {
  }

}
