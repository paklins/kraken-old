import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UploadFilesModule } from '../upload-files/upload-files.module';
import { AuMaterialModule } from '../au-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [CreateTaskComponent, DashboardComponent],
  imports: [
    CommonModule,
    UploadFilesModule,
    FlexLayoutModule,
    DashboardModule
  ],
  exports: [CreateTaskComponent, DashboardComponent]
})
export class PagesModule { }
