import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'au-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindowComponent implements OnInit {

  @Input()
  public text: string = '';

  @Output()
  public close: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
