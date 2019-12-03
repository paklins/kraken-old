import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionDialogMode } from '../question-dialog-mode.enum';
import { QuestionDialogResult } from '../question-dialog-result.enum';

@Component({
  selector: 'au-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionDialogComponent implements OnInit {
  public enabledOK: boolean = false;
  public enabledYes: boolean = false;
  public enabledNo: boolean = false;
  public enabledCancel: boolean = false;

  public answerOK: QuestionDialogResult = QuestionDialogResult.Ok;
  public answerYes: QuestionDialogResult = QuestionDialogResult.Yes;
  public answerNo: QuestionDialogResult = QuestionDialogResult.No;
  public answerCancel: QuestionDialogResult = QuestionDialogResult.Cancel;

  constructor(
    public dialogRef: MatDialogRef<QuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: {caption: string, text: string, mode: QuestionDialogMode}
  ) { 
    if(QuestionDialogMode.YesNo == data.mode){
      this.enabledYes = true;
      this.enabledNo = true;

    } else if(QuestionDialogMode.YesNoCancel == data.mode){
      this.enabledYes = true;
      this.enabledNo = true;
      this.enabledCancel = true;

    } else {
      this.enabledOK = true;
    }
  }

  ngOnInit() {
  }

  public onClose(mode?: QuestionDialogMode){
    this.dialogRef.close(mode);
  }

}
