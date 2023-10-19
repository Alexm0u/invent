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
    { label: 'Tipos de paquete', icon: 'description', url: './list'},
    { label: 'Personal', icon: 'accessibility_new', url: './users'},
    { label: 'Envíos', icon: 'flight_takeoff', url: './send'},
    { label: 'Transporte', icon: 'commute', url: './companies'},
    { label: 'Bienvenida', icon: 'home', url: './welcome'},
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
