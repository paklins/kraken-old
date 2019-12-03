import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WidgetWizardComponent } from '../widget-wizard/widget-wizard.component';
import { DialogService } from 'src/app/controls/dialog.service';
import { QuestionDialogResult } from 'src/app/controls/question-dialog-result.enum';
import { QuestionDialogMode } from 'src/app/controls/question-dialog-mode.enum';

@Component({
  selector: 'au-dashboard-command-panel',
  templateUrl: './dashboard-command-panel.component.html',
  styleUrls: ['./dashboard-command-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardCommandPanelComponent implements OnInit {

  constructor(public dialog: MatDialog, 
    public serviceDialog: DialogService) { }

  ngOnInit() {
  }

  public configClick(): void{
      const configDialog = this.dialog.open(
        WidgetWizardComponent,
        {
          panelClass: "au-dashboard-config-dialog",
          backdropClass: "au-dashboard-config-backdrop",
          disableClose: true,
          hasBackdrop: true
        }
      );
  }

  public questionDialog(): void{
    let longText: string = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";

    const dialog = this.serviceDialog.question("test", longText, QuestionDialogMode.YesNoCancel);

    dialog.afterClosed().subscribe(
      (result: QuestionDialogResult) => {
        console.log(result);
    });
  }

}
