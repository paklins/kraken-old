import { DashboardRenderGridRow } from './dashboard-render-grid-row';

export class DashboardRenderGrid {
    
    private _rows : DashboardRenderGridRow[] = [];
    public get rows() : DashboardRenderGridRow[] {
        return this._rows;
    }

    public addRow(): DashboardRenderGridRow{

        let result: DashboardRenderGridRow = new DashboardRenderGridRow();

        this._rows.push(result);

        return result;
    }

}
