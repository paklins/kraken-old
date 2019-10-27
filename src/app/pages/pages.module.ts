import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UploadFilesModule } from '../upload-files/upload-files.module';
import { AuMaterialModule } from '../au-material.module';



@NgModule({
  declarations: [CreateTaskComponent],
  imports: [
    CommonModule,
    UploadFilesModule
  ],
  exports: [CreateTaskComponent]
})
export class PagesModule { }
