import { DashboardRenderGridRow } from './dashboard-render-grid-row';

export class DashboardRenderGridCell {
    
    private _childs : DashboardRenderGridRow[] = [];
    public get childs() : DashboardRenderGridRow[] {
        return this._childs;
    }
    
    private _colSpan : number;
    public get colSpan() : number {
        return this._colSpan;
    }
    
    private _widgetIndex : number;
    public get widgetIndex() : number {
        return this._widgetIndex;
    }

    constructor(widgetIndex: number, span: number, childs: DashboardRenderGridRow[] = []){
        this._widgetIndex = widgetIndex;
        this._colSpan = span;
        this._childs = childs;
    }
}
