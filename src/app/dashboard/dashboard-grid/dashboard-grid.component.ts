import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Renderer2, ViewEncapsulation } from '@angular/core';
import { DashboardWidget } from '../dashboard-widget';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'au-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardGridComponent implements OnInit {

  public maxCols: number = 4;
  public maxRows: number = 4;

  @ViewChild('widgetContainer', {static: true, read: ViewContainerRef})
  public widgetContainer: ViewContainerRef;

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

  constructor(private resolver: ComponentFactoryResolver,
    private rederer: Renderer2) { }

  ngOnInit() {
    this.widgetContainer.clear();

    const factory = this.resolver.resolveComponentFactory(
      WidgetComponent);

    for (let index = 0; index < 4; index++) {
      const componentRef = this.widgetContainer.createComponent(factory);
      const elementRef = componentRef.location.nativeElement;

      this.rederer.addClass(elementRef, 'dashboard-widget');
    }
  }

}
