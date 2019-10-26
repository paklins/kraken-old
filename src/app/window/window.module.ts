import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuWindowComponent } from './au-window/au-window.component';



@NgModule({
  declarations: [AuWindowComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AuWindowComponent
  ]
})
export class WindowModule { }
