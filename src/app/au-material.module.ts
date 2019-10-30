import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatTreeModule,
  MatTooltipModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatSortModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatSidenavModule,
  MatSelectModule,
  MatRippleModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatNativeDateModule,
  MatMenuModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatGridListModule,
  MatExpansionModule,
  MatDividerModule,
  MatDialogModule,
  MatDatepickerModule,
  MatChipsModule,
  MatStepperModule,
  MatCheckboxModule,
  MatCardModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatBadgeModule,
  MatAutocompleteModule
} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkStepperModule } from '@angular/cdk/stepper';

let importedModules = [
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: importedModules
})
export class AuMaterialModule { }
