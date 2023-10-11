import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { PanelRoutingModule } from './panel-routing.module';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SendPageComponent } from './pages/send-page/send-page.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { PanelPageComponent } from './pages/panel-page/panel-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';


@NgModule({
  declarations: [
    PackagePageComponent,
    PanelPageComponent,
    ListPageComponent,
    UsersPageComponent,
    SendPageComponent,
    CompaniesPageComponent,
    MenuPageComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MaterialModule,
    PanelRoutingModule,
    MaterialModule
  ]
})
export class PanelModule { }