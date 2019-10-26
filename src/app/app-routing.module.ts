import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesModule } from './pages/pages.module';
import { CreateTaskComponent } from './pages/create-task/create-task.component';

const routes: Routes = [
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
