import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesModule } from './pages/pages.module';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
    {
      "path": "",
      "component": DashboardComponent
    },
    {
      "path": "create-task",
      "component": CreateTaskComponent
    }
];

@NgModule({
  imports: [
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
