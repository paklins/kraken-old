import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Renderer2, ViewEncapsulation, ComponentFactory } from '@angular/core';
import { DashboardWidget } from '../dashboard-widget';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'au-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardGridComponent implements OnInit {

  private factory: ComponentFactory<WidgetComponent>;

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

  private fillGridCols(row: number[], index: number, span: number, 
      max: number, filledCells: number, widgetIndex: number){

    for (let column = index; column < index + span && column < max; column++) {
      if(undefined == row[column]){
        row[column] = widgetIndex;

        filledCells++;
      }
    }

    return filledCells;
  }

  private rowsToFill(index: number, span: number, max: number): number[]{

    let result: number[] = [];

    for (let row = index; row < index + span && row < max; row++) {
      result.push(row);
    }

    return result;
  }

  private rowFilled(grid: number[][], row: number, maxCols: number): boolean{
    let result: boolean = true;

    if(undefined == grid[row]){
      grid[row] = [];

      return false;
    }

    for (let index = 0; index < maxCols; index++) {
      const element = grid[row][index];
      
      if(undefined == element){
        result = false;
        break;
      }
    }

    return result;
  }

  private loadWidgets(factory: ComponentFactory<WidgetComponent>): void{
    this.widgetContainer.clear();

    let widgetGrid: number[][] = [];

    let indexRow: number = 0;
    let indexCol: number = 0;
    let widgetIndex: number = 0;

    const maxCells: number = this.maxCols * this.maxCols;
    let filledCells: number = 0;

    this.widgets.forEach((widget: DashboardWidget) => {
      const componentRef = this.widgetContainer.createComponent(factory);
      const elementRef = componentRef.location.nativeElement;

      if(filledCells >= maxCells){
        return;
      }

      while(this.rowFilled(widgetGrid, indexRow, this.maxCols) 
        && indexRow < this.maxRows){

        indexRow++;
      }

      let rowsToFill: number[] = this.rowsToFill(
        indexRow, widget.rowSpan, this.maxRows);

      rowsToFill.forEach((row: number) => {
        filledCells = this.fillGridCols(widgetGrid[row], indexCol, widget.colSpan, 
          this.maxCols, filledCells, widgetIndex);
      });

      this.rederer.addClass(elementRef, 'dashboard-widget');

      widgetIndex++;
    });

    console.log(widgetGrid);
  }

  private getFactory(): ComponentFactory<WidgetComponent>{
    const factory: ComponentFactory<WidgetComponent> = 
      this.resolver.resolveComponentFactory(WidgetComponent);

    return factory;
  }

  constructor(private resolver: ComponentFactoryResolver,
    private rederer: Renderer2) { }

  ngOnInit() {
    this.factory = this.getFactory();
    
    this.loadWidgets(this.factory);
  }

}
