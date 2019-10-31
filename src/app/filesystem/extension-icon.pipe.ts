import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extensionIcon'
})
export class ExtensionIconPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {

    let result : string = "";

    switch(value){
      case "zip":
      case "rar":
      case "7z":
        result = "archive";
        break;
      default:
        result = "insert_drive_file";
        break;
    }

    return result;
  }

}
