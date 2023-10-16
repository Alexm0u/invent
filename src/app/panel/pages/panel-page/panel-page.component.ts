import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

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
  ];

  constructor(private authService: AuthService,
    private router: Router){}
get user():User | undefined{
  return this.authService.currentUser;
}

    onLogout(){
      this.authService.logout();
      this.router.navigate(['/auth/login'])
    }
}
