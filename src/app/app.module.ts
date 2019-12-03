import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuMaterialModule } from './au-material.module';
import { NavigationModule } from './navigation/navigation.module';
import { WindowModule } from './window/window.module';
import { PagesModule } from './pages/pages.module';
import { ControlsModule } from './controls/controls.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuMaterialModule,
    NavigationModule,
    PagesModule,
    ControlsModule,
    WindowModule],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
