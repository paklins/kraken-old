import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionIconPipe } from './extension-icon.pipe';
import { FileExtensionPipe } from './file-extension.pipe';
import { ExtensionDescriptionPipe } from './extension-description.pipe';



@NgModule({
  declarations: [ExtensionIconPipe, FileExtensionPipe, ExtensionDescriptionPipe],
  imports: [
    CommonModule
  ],
  exports: [ExtensionIconPipe, FileExtensionPipe, ExtensionDescriptionPipe]
})
export class FilesystemModule { }
