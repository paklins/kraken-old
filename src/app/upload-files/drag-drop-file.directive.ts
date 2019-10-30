import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[auDragDropFile]'
})
export class DragDropFileDirective {

  @Output()
  fileOver: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  fileLeave: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  fileDropped: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('dragover', ['$event'])
  public onDragOver(event: Event): void{
    event.preventDefault();
    event.stopPropagation();

    this.fileOver.emit(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: Event): void{
    event.preventDefault();
    event.stopPropagation();

    this.fileLeave.emit(event);
  }

  @HostListener('drop', ['$event'])
  public onDropFile(event: any): void{
    event.preventDefault();
    event.stopPropagation();

    let files: any[] = event.dataTransfer.files;

    if(files.length > 0){
      this.fileDropped.emit(files);
    }
  }

  constructor() { }

}
