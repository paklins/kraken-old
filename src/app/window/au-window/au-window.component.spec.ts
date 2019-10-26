import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuWindowComponent } from './au-window.component';

describe('AuWindowComponent', () => {
  let component: AuWindowComponent;
  let fixture: ComponentFixture<AuWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
