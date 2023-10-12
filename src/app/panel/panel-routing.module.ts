import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SendsPageComponent } from './pages/send-page/send-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { PanelPageComponent } from './pages/panel-page/panel-page.component';
import { LoginPageComponent } from '../auth/pages/login-page/login-page.component';
import { MainPanelPageComponent } from './pages/main-panel-page/main-panel-page.component';

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
        path: 'new-company',
        component: CompaniesPageComponent,
      },
      {
        path: 'edit-company/:id',
        component: CompaniesPageComponent,
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
        component:SendsPageComponent,
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
        component: MainPanelPageComponent,
      },
      {
        path: ':id',
        component: CompaniesPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
