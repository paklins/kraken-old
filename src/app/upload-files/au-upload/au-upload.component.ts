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
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
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

  public files: FileItem[] = [];
  public displayedColumns: string[] = ['name', 'size'];

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

  public onFileDrop(draggedFiles: FileList){
    this.fileOver = false;

    for (let index = 0; index < draggedFiles.length; index++) {
      const file: File = draggedFiles[index];

      this.files.push(new FileItem(file));
    }

    if(draggedFiles.length > 0){
      this.tableFiles.renderRows();
    }
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
