import { Component, OnInit } from '@angular/core';
import { DashboardWidget } from '../dashboard-widget';

@Component({
  selector: 'au-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.scss']
})
export class DashboardPanelComponent implements OnInit {

  public widgets: DashboardWidget[] = []

  constructor() { }

  ngOnInit() {

    const widget: DashboardWidget = new DashboardWidget();
    widget.title = "Widget 1";

    const widget2: DashboardWidget = new DashboardWidget();
    widget.title = "Widget 2";

    widget2.colSpan = 2;
    widget2.rowSpan = 2;

    this.widgets.push(widget);
    this.widgets.push(widget2);

    this.widgets.push(widget);
    this.widgets.push(widget);
    this.widgets.push(widget);

    const widget3: DashboardWidget = new DashboardWidget();
    widget3.colSpan = 5;

    this.widgets.push(widget3);

    this.widgets.push(widget);
    this.widgets.push(widget);
    this.widgets.push(widget);
    this.widgets.push(widget);
  }

}
