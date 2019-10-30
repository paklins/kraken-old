import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuUploadComponent } from './au-upload/au-upload.component';
import { AuMaterialModule } from '../au-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperIntl } from '@angular/material';
import { UploadStepperIntl } from './upload-stepper-intl';
import { DragDropFileDirective } from './drag-drop-file.directive';
import { PipesModule } from '../pipes/pipes.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  declarations: [AuUploadComponent, DragDropFileDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuMaterialModule,
    PipesModule,
    PerfectScrollbarModule
  ],
  exports: [AuUploadComponent, DragDropFileDirective],
  providers: [
    { provide: MatStepperIntl, useClass: UploadStepperIntl }
  ]
})
export class UploadFilesModule { }
