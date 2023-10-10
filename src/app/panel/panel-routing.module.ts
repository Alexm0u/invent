import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';

const routes: Routes = [
  {path: '', component: LayoutPageComponent, children: [
    {
      path: 'new-company', component: CompaniesPageComponent
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
