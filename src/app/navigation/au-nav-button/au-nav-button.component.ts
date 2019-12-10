import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'au-nav-button',
  templateUrl: './au-nav-button.component.html',
  styleUrls: ['./au-nav-button.component.scss']
})
export class AuNavButtonComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  text: string;

  @Input()
  collapsed: boolean;

  @Input()
  alwaysElevation: boolean = false;

  @Input()
  type: string = "default";

  @Input()
  route: string = "/";

  public hovered: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onMouseOver(event: Event, value: boolean): void{
    this.hovered = value;
  }

  public navigate(): void{
    this.router.navigate([this.route]);
  }
}
