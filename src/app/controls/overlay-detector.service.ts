import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayDetectorService {
  private _visible : boolean = false;
  public get visible() : boolean {
    return this._visible;
  }
  public set visible(v : boolean) {
    this._visible = v;

    this.visibleChanged.emit(this._visible);
  }

  public visibleChanged: EventEmitter<boolean> = 
    new EventEmitter<boolean>();

  constructor() { }
}
