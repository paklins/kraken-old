import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'au-window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindowHeaderComponent implements OnInit {

  public data: any;

  @Input()
  public text: string = '';

  @Output()
  public close: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
