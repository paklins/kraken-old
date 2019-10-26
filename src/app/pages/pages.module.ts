import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';



@NgModule({
  declarations: [CreateTaskComponent],
  imports: [
    CommonModule
  ],
  exports: [CreateTaskComponent]
})
export class PagesModule { }
