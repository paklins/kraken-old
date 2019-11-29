import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { AuMaterialModule } from '../au-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [DashboardPanelComponent],
  imports: [
    CommonModule,
    AuMaterialModule,
    FlexLayoutModule
  ],
  exports:[
    DashboardPanelComponent
  ]
})
export class DashboardModule { }
