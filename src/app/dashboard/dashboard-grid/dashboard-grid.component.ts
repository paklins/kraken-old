import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Renderer2, ViewEncapsulation, ComponentFactory } from '@angular/core';
import { DashboardWidget } from '../dashboard-widget';
import { WidgetComponent } from '../widget/widget.component';
import { MatToolbar, MatToolbarRow } from '@angular/material';
import { DashboardRenderGrid } from './dashboard-render-grid';
import { DashboardRenderGridRow } from './dashboard-render-grid-row';

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

  public renderGrid: DashboardRenderGrid = new DashboardRenderGrid();

  @ViewChild('widgetContainer', {static: true, read: ViewContainerRef})
  public widgetContainer: ViewContainerRef;

  @Input()
  public widgets: DashboardWidget[] = [];

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

  private availableColumn(grid: number[][], row: number, maxCols: number): number{
    let result: number = -1;

    if(undefined == grid[row]){
      grid[row] = [];

      return 0;
    }

    for (let index = 0; index < maxCols; index++) {
      const element = grid[row][index];
      
      if(undefined == element){
        result = index;
        break;
      }
    }

    return result;
  }

  private generateGrid(widgets: DashboardWidget[], 
    maxRows: number, maxCols: number): number[][]{

    this.widgetContainer.clear();

    let widgetGrid: number[][] = [];

    let indexRow: number = 0;
    let indexCol: number = -1;
    let widgetIndex: number = 0;

    const maxCells: number = maxCols * maxCols;
    let filledCells: number = 0;

    widgets.forEach((widget: DashboardWidget) => {
      if(filledCells >= maxCells){
        return;
      }

      indexCol = this.availableColumn(
        widgetGrid, indexRow, maxCols);

      while(indexCol < 0 && indexRow < maxRows){
        indexRow++;

        indexCol = this.availableColumn(
          widgetGrid, indexRow, maxCols);
      }

      let rowsToFill: number[] = this.rowsToFill(
        indexRow, widget.rowSpan, maxRows);

      rowsToFill.forEach((row: number) => {
          if(undefined == widgetGrid[row]){
            widgetGrid[row] = [];
          }

      filledCells = this.fillGridCols(widgetGrid[row], indexCol, widget.colSpan, 
        this.maxCols, filledCells, widgetIndex);
      });

      widgetIndex++;
    });

    return widgetGrid;
  }

  // private getFactory(Component: any): ComponentFactory<any>{
  //   const factory: ComponentFactory<any> = 
  //     this.resolver.resolveComponentFactory(Component);

  //   return factory;
  // }

  private calculateRowItemCount(widgetGrid: number[][], 
      rowCount: number, rowIndex: number): number{

    let result: number = 1;
    let colIndex: number = 0;

    const row: number[] = widgetGrid[rowIndex];
    const colCount: number = row.length;

    while(colIndex < colCount){
      const currentColumn: number = row[colIndex];
      const nextRowIndex: number = rowIndex + 1;

      if(nextRowIndex >= rowCount){
        break;
      }

      const nextRow: number[] = widgetGrid[nextRowIndex];
      const nextRowColumn: number = nextRow[colIndex];

      if(currentColumn == nextRowColumn){
        result = 0;
        break;
      }

      colIndex++;
    }

    return result;
  }

  private renderWidgetGrid(): DashboardRenderGrid{
    let factRows: number = 0;
    let renderGrid: DashboardRenderGrid = new DashboardRenderGrid();

    const grid: number[][] = this.generateGrid(
      this.widgets,
      this.maxRows,
      this.maxCols);

    let rowsCount: number = grid.length;
    let nextIndex: number = 0;
    let renderGridRow: DashboardRenderGridRow;

    for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
        const nextIndex: number = rowIndex + 1;
        const row: number[] = grid[rowIndex];
        //if(nextIndex >= rowsCount){
        renderGridRow = renderGrid.addRow();
        const cellCount: number = grid[rowIndex].length;

        for (let cellIndex: number = 0; cellIndex < cellCount; cellIndex++) {
          const cell: number = row[cellIndex];
          
          renderGridRow.addCell(cell, 1);
        }
        //}
    }

    return renderGrid;
  }

  constructor(private resolver: ComponentFactoryResolver,
    private rederer: Renderer2) { }

  ngOnInit() {
    // this.factory = this.getFactory(WidgetComponent);
    // const rowFactory = this.getFactory(MatToolbarRow);

    // factory: ComponentFactory<WidgetComponent>
    // const componentRef = this.widgetContainer.createComponent(factory);
    // const elementRef = componentRef.location.nativeElement;
    // this.rederer.addClass(elementRef, 'dashboard-widget');

    this.renderGrid = this.renderWidgetGrid();
  }

}
