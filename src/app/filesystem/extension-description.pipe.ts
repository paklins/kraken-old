import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extensionDescription'
})
export class ExtensionDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let result: string = "";

        switch(value){
            case "dll":
                result = "Расширение приложения"
                break;

            default:
                result = `Файл с расширением $extension`;
                break;
        }

        return result;
  }

}
