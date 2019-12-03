import { Component, OnInit, Input } from '@angular/core';
import { DashboardWidget } from '../dashboard-widget';

@Component({
  selector: 'au-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent implements OnInit {

  public maxCols: number = 4;
  public maxRows: number = 4;

  @Input()
  public widgets: DashboardWidget[] = [];

  private calculate(): void{
    this.widgets.forEach(widget => {
      const result = this.calculateWidget(
        this.maxCols,
        this.maxRows,
        widget);

      this.maxCols = result.cols;
      this.maxRows = result.rows;
    });
  }

  private calculateWidget(maxCols: number, maxRows: number, widget: DashboardWidget): 
  { cols: number, rows: number }{
    let cols: number = maxCols;
    let rows: number = maxRows;

    return { cols: cols, rows: rows };
  }

  constructor() { }

  ngOnInit() {
  }

}
