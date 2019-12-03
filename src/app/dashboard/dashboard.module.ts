import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { AuMaterialModule } from '../au-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WidgetComponent } from './widget/widget.component';
import { DashboardCommandPanelComponent } from './dashboard-command-panel/dashboard-command-panel.component';
import { WidgetWizardComponent } from './widget-wizard/widget-wizard.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { ControlsModule } from '../controls/controls.module';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component';



@NgModule({
  declarations: [DashboardPanelComponent, WidgetComponent, DashboardCommandPanelComponent, WidgetWizardComponent, DashboardGridComponent],
  imports: [
    CommonModule,
    ControlsModule,
    AuMaterialModule,
    FlexLayoutModule
  ],
  exports:[
    DashboardPanelComponent,
    WidgetComponent,
    DashboardCommandPanelComponent,
    WidgetWizardComponent,
    DashboardGridComponent
  ],
  entryComponents: [
    WidgetWizardComponent, 
    WidgetComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ]
})
export class DashboardModule { }
