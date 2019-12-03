import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuMaterialModule } from '../au-material.module';
import { WindowComponent } from './window/window.component';
import { WindowHeaderComponent } from './window-header/window-header.component';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { DialogService } from './dialog.service';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [WindowComponent, WindowHeaderComponent, QuestionDialogComponent],
  imports: [
    CommonModule,
    AuMaterialModule,
    DragDropModule
  ],
  providers: [DialogService],
  exports: [WindowComponent, WindowHeaderComponent, QuestionDialogComponent],
  entryComponents: [QuestionDialogComponent]
})
export class ControlsModule { }
