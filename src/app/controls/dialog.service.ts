import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { QuestionDialogMode } from './question-dialog-mode.enum';
import { QuestionDialogResult } from './question-dialog-result.enum';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}

  public question(caption: string, text: string, mode: QuestionDialogMode = QuestionDialogMode.OK): 
    MatDialogRef<QuestionDialogComponent, QuestionDialogResult>{

      const dialog: MatDialogRef<QuestionDialogComponent, QuestionDialogResult> = this.dialog.open(
        QuestionDialogComponent, 
        {
          data: { caption: caption, text: text, mode: mode},
          panelClass: "au-dashboard-config-dialog",
          backdropClass: "au-dashboard-config-backdrop",
          disableClose: true,
          hasBackdrop: true
        }
      )

      return dialog;
  }
}
