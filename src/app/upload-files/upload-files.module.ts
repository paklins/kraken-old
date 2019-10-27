import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuUploadComponent } from './au-upload/au-upload.component';
import { AuMaterialModule } from '../au-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AuUploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuMaterialModule
  ],
  exports: [AuUploadComponent]
})
export class UploadFilesModule { }
