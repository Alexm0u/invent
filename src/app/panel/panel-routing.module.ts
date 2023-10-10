import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/panel-page/panel-page.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { SendPageComponent } from './pages/send-page/send-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
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
        path: 'package',
        component: PackagePageComponent,
      },
      {
        path: 'send',
        component:SendPageComponent,
      },
      {
        path: 'users',
        component: UsersPageComponent,
      },
      {
        path: 'panel',
        component: LayoutPageComponent,
      },
      {
        path: ':id',
        component: CompaniesPageComponent,
      },
      {
        path: '**',
        redirectTo: 'panel',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
