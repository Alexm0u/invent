import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-page',
  templateUrl: './panel-page.component.html',
  styleUrls: ['./panel-page.component.css']
})
export class PanelPageComponent {

  public sidebarItems = [
    { label: 'Tipos de paquete', icon: 'label', url: './list'},
    { label: 'Admin/Trabajadores', icon: 'label', url: './users'},
    { label: 'Envíos registrados', icon: 'label', url: './send'},
    { label: 'Empresas externas transporte', icon: 'label', url: './companies'},
  ]

}
