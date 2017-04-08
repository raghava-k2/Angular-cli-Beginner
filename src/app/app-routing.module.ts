import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DatagridComponent} from './datagrid/datagrid.component'

const routes : Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: DatagridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}