import { Component, OnInit } from '@angular/core';
import { DialogService } from './controls/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kraken';

  public overlayVisible: boolean = false;

  public constructor(public dialogService: DialogService){

  }

  public ngOnInit(){

  }

}
