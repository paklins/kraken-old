import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'au-widget-wizard',
  templateUrl: './widget-wizard.component.html',
  styleUrls: ['./widget-wizard.component.scss']
})
export class WidgetWizardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WidgetWizardComponent>
  ) { }

  ngOnInit() {
  }

}
