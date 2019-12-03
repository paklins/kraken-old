import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCommandPanelComponent } from './dashboard-command-panel.component';

describe('DashboardCommandPanelComponent', () => {
  let component: DashboardCommandPanelComponent;
  let fixture: ComponentFixture<DashboardCommandPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCommandPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCommandPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
