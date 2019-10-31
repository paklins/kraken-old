export class FileItem {

    constructor(file: File, fullName: string){
        this._name = fullName;
        this._size = file.size;
        this._binary = file;
    }

    private _name : string;
    public get name() : string {
        return this._name;
    }

    private _size : number;
    public get size() : number {
        return this._size;
    }

    private _binary : File;
    public get binary() : File {
        return this._binary;
    }
        
    private _checked : boolean;
    public get checked() : boolean {
        return this._checked;
    }
    public set checked(v : boolean) {
        this._checked = v;
    }
    
}
