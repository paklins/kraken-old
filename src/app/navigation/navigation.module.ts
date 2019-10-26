import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuSidebarComponent } from './au-sidebar/au-sidebar.component';
import { AuMaterialModule } from '../au-material.module';
import { AuNavButtonComponent } from './au-nav-button/au-nav-button.component';
import { AuNavbarComponent } from './au-navbar/au-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuSidebarComponent,
    AuNavButtonComponent,
    AuNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuMaterialModule
  ],
  exports: [
    AuSidebarComponent,
    AuNavButtonComponent,
    AuNavbarComponent
  ]
})
export class NavigationModule { }
