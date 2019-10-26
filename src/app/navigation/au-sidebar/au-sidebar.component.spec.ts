import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuSidebarComponent } from './au-sidebar.component';

describe('AuSidebarComponent', () => {
  let component: AuSidebarComponent;
  let fixture: ComponentFixture<AuSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
