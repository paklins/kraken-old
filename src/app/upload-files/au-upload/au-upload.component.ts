import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { MatStepper } from '@angular/material/stepper'
import { MatButton } from '@angular/material';

@Component({
  selector: 'au-upload',
  templateUrl: './au-upload.component.html',
  styleUrls: ['./au-upload.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stepSelectedFiles = this._formBuilder.group(
      {
        
      }
    );

    this.stepUploadFiles = this._formBuilder.group({});
    this.stepFinal = this._formBuilder.group({});
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
