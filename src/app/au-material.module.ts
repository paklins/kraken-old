import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatDrawer,
  MatDrawerContent,
  MatDrawerContainer,
  MatToolbar,
  MatToolbarRow,
  MatIcon,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
  MatDivider,
  MatButton,
  MatButtonModule,
  MatRipple,
  MatHorizontalStepper,
  MatStep,
  MatStepHeader,
  MatStepLabel
} from '@angular/material';

let importedComponents = [
  MatDrawer,
  MatDrawerContent,
  MatDrawerContainer,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
  MatToolbar,
  MatToolbarRow,
  MatIcon,
  MatDivider,
  MatButton,
  MatRipple,
  MatHorizontalStepper,
  MatStep,
  MatStepHeader,
  MatStepLabel
];

@NgModule({
  declarations: importedComponents,
  imports: [
    CommonModule
  ],
  exports: importedComponents
})
export class AuMaterialModule { }
