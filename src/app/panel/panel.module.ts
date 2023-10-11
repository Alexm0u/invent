import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { PanelRoutingModule } from './panel-routing.module';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SendPageComponent } from './pages/send-page/send-page.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { PanelPageComponent } from './pages/layout-page/layout-page.component';
import { MainPanelPageComponent } from './pages/main-panel-page/main-panel-page.component';


@NgModule({
  declarations: [
    PackagePageComponent,
    PanelPageComponent,
    ListPageComponent,
    UsersPageComponent,
    SendPageComponent,
    CompaniesPageComponent,
    MainPanelPageComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MaterialModule
  ]
})
export class PanelModule { }
