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
  fileDropped: EventEmitter<any> = new EventEmitter<any>(true);

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
  public async onDropFile(event: any){
    event.preventDefault();
    event.stopPropagation();

    let items: DataTransferItem[] = event.dataTransfer.items;
    let files: any[] = [];

    for (let index = 0; index < items.length; index++) {
      const item: any = items[index].webkitGetAsEntry();

      this.excludeFiles(item, files);
    }

    this.fileDropped.emit(undefined);
  }

  constructor() { }
  
  private excludeFiles(item: any, files: any[]): void{
    if(item.isFile){
      
      item.file(file => { 
        this.fileDropped.emit({"file": file, "name": item.fullPath }); 
      });

    } else if(item.isDirectory){
      let reader = item.createReader();

      reader.readEntries((entries: any[]) => {
        for (let index = 0; index < entries.length; index++) {
          const entry = entries[index];

          this.excludeFiles(entry, files);
        }
      });
    }
  }

}
