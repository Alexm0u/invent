import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { PanelRoutingModule } from './panel-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SendsPageComponent } from './pages/send-page/send-page.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { PanelPageComponent } from './pages/panel-page/panel-page.component';
import { CardComponent } from './components/card/card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SendListComponent } from './components/send-list/send-list.component';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { EditCompPageComponent } from './pages/edit-comp-page/edit-comp-page.component';
import { AddCompPageComponent } from './pages/add-comp-page/add-comp-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NewSendComponent } from './pages/new-send/new-send.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    PanelPageComponent,
    ListPageComponent,
    UsersPageComponent,
    SendsPageComponent,
    CompaniesPageComponent,
    CardComponent,
    UserListComponent,
    SendListComponent,
    CompaniesListComponent,
    EditCompPageComponent,
    AddCompPageComponent,
    ConfirmDialogComponent,
    NewSendComponent,
    WelcomePageComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
})
export class PanelModule {}
