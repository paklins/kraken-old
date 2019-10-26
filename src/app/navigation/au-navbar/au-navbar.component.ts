import { Component, OnInit } from '@angular/core';
import { SidebarCommand } from '../sidebar-command';

@Component({
  selector: 'au-au-navbar',
  templateUrl: './au-navbar.component.html',
  styleUrls: ['./au-navbar.component.scss']
})
export class AuNavbarComponent implements OnInit {

  public createTask: SidebarCommand;

  constructor() { }

  ngOnInit() {

    this.createTask = new SidebarCommand("createTask", "create-task", "Новая задача", "add_to_queue");

  }

}
