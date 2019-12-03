import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'au-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
