import { Component, OnInit } from '@angular/core';
import { SidebarCommand } from '../sidebar-command';

@Component({
  selector: 'au-sidebar',
  templateUrl: './au-sidebar.component.html',
  styleUrls: ['./au-sidebar.component.scss']
})
export class AuSidebarComponent implements OnInit {

  public opened: boolean = true;
  public commands: SidebarCommand[];
  public settingsCommand: SidebarCommand;

  constructor() { }

  public toggle(): void{
      this.opened = !this.opened;
  }

  ngOnInit() {
      this.commands = [
          new SidebarCommand("dashboard", "dashboard", "Главная", "dashboard"),
          new SidebarCommand("tasks", "tasks", "Общие задачи", "public"),
          new SidebarCommand("my-tasks", "my", "Мои задачи", "dvr")
      ];

      this.settingsCommand = new SidebarCommand("settings", "settings", "Настройки", "settings_applications");
  }

}
