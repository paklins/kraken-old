export class SidebarCommand {
    /**
     * Icon property
     */
    private _icon : string;
    public get icon() : string {
        return this._icon;
    }
    public set icon(v : string) {
        this._icon = v;
    }
    /**
     * Name property
     */
    private _name : string;
    public get name() : string{
        return this._name    }
    public set name(v : string) {
        this._name = v;
    }
    /**
     * Presentaion property
     */
    private _presentation : string;
    public get presentation() :string {
        return this._presentation;
    }
    public set presentation(v : string) {
        this._presentation = v;
    }
    /**
     * Action property
     */
    private _action : string;
    public get action() : string {
        return this._action;
    }
    public set action(v : string) {
        this._action = v;
    }
    /**
     * 
     * @param name 
     * @param action 
     * @param presentation 
     * @param icon 
     */
    public constructor(name: string, action: string, presentation: string = "", icon: string = ""){
        this._name = name;
        this._action = action;

        if(presentation.length){
            this._presentation = presentation;
        } else {
            this._presentation = this._name;
        }

        if(!icon.length){
            this._icon = "help";
        } else {
            this._icon = icon;
        }
    }

}
