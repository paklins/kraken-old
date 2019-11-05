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

    let entries = this.getEntries(items);
    let directoryInfo: any[] = [];
    await this.trackEntries(entries, directoryInfo);

    let files = await Promise.all(directoryInfo);

    this.fileDropped.emit(files);
  }

  constructor() { }

  private getEntries(items: any[]): any[]{
    let result: any[] = [];

    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      
      result.push(item.webkitGetAsEntry());
    }

    return result;
  }

  private async getFileInfo(entry: any): Promise<any>{
    return new Promise((resolve) => {
      entry.file(file => resolve({"file": file, "name": entry.fullPath }));
    });
  }

  private async trackEntries(entries: any[], list?: any[]): Promise<any>{
    return new Promise((resolve) => {
      entries.forEach(async entry => {
        if(entry.isFile){
          list.push(this.getFileInfo(entry));

        } else if(entry.isDirectory){

          let reader = entry.createReader();
          let entries: any[] = await new Promise(
            (resolve) => { reader.readEntries(entries => { resolve(entries); } )});

            this.trackEntries(entries, list);
        };

        resolve();
      })
    });
  }
}
