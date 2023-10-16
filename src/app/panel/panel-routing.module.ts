import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SendsPageComponent } from './pages/send-page/send-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { PanelPageComponent } from './pages/panel-page/panel-page.component';
import { EditCompPageComponent } from './pages/edit-comp-page/edit-comp-page.component';
import { NewSendComponent } from './pages/new-send/new-send.component';

const routes: Routes = [
  {
    path: '',
    component: PanelPageComponent,
    children: [
      {
        path: 'companies',
        component: CompaniesPageComponent,
      },
      {
        path: 'add-comp',
        component: EditCompPageComponent,
      },
      {
        path: 'edit/:id',
        component: EditCompPageComponent,
      },
      {
        path: 'list',
        component: ListPageComponent,
      },
      {
        path: 'send',
        component:SendsPageComponent,
      },
      {
        path: 'new-send',
        component:NewSendComponent,
      },
      {
        path: 'del-send',
        component:SendsPageComponent,
      },
      {
        path: 'users',
        component: UsersPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
