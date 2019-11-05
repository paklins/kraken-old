import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { MatStepper } from '@angular/material/stepper'
import { MatButton, MatTable } from '@angular/material';
import { FileItem } from '../file-item';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  scrollXMarginOffset: 20
};

@Component({
  selector: 'au-upload',
  templateUrl: './au-upload.component.html',
  styleUrls: ['./au-upload.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, 
      useValue: {displayDefaultIndicatorType: false}
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG, 
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AuUploadComponent implements OnInit {

  public stepSelectedFiles: FormGroup;
  public stepUploadFiles: FormGroup;
  public stepFinal: FormGroup;
  public canPrevStep: boolean = false;
  public nextButtonText: string = "Далее";
  public directionStep: string = "forward";
  public fileOver: boolean = false;
  public text: string = "1";

  public files: FileItem[] = [];
  public displayedColumns: string[] = 
    ['icon', 'name', 'size', 'type'];

  @ViewChild(MatTable, {static: false}) tableFiles: 
  MatTable<any>;

  public config: PerfectScrollbarConfigInterface = {};

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stepSelectedFiles = this._formBuilder.group(
      {
        
      }
    );

    this.stepUploadFiles = this._formBuilder.group({});
    this.stepFinal = this._formBuilder.group({});
  }

  public onFileDrop(files: any[]){
    if(files.length){
      for (let index = 0; index < files.length; index++) {
        const fileInfo = files[index];
        
        let item: FileItem = new FileItem(
          fileInfo.file, fileInfo.name);

        this.files.push(item);
      }

      this.tableFiles.renderRows();
    }

    this.fileOver = false;
  }

  public selectionChange(stepper: MatStepper){
    this.canPrevStep = (
      stepper.selectedIndex != 1 || this.directionStep == "forward");

    this.nextButtonText = 
      (stepper.selectedIndex + 1 == stepper.steps.length - 1 && this.directionStep == "forward") 
      ? "Завершить" : "Далее";
  }

  public nextStep(stepper: MatStepper, nextButton: MatButton): void{
    this.directionStep = "forward";
    stepper.next();
  }

  public prevStep(stepper: MatStepper, prevButton: MatButton): void{
    this.directionStep = "backward";

    prevButton._elementRef.nativeElement

    stepper.previous();
  }

  public stepControlSelectedFiles(): boolean{
    return false;
  }

}
