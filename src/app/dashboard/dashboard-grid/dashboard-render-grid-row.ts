import { DashboardRenderGridCell } from './dashboard-render-grid-cell';

export class DashboardRenderGridRow {

    private _cells : DashboardRenderGridCell[] = [];
    public get cells() : DashboardRenderGridCell[] {
        return this._cells;
    }
    
    public addCell(widgetIndex: number, colSpan: number, 
        childs: DashboardRenderGridRow[] = []): DashboardRenderGridCell{

        let result: DashboardRenderGridCell = new DashboardRenderGridCell(
            widgetIndex, colSpan, childs);

        this._cells.push(result);

        return result;
    }

}
