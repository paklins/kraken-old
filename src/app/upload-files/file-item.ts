export class FileItem {

    constructor(file: File){
        this._name = file.name;
        this._size = file.size;
        this._type = file.type;

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

    private _type : string;
    public get type() : string {
        return this._type;
    }

    private _binary : File;
    public get binary() : File {
        return this._binary;
    }
}
