import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuNavButtonComponent } from './au-nav-button.component';

describe('AuNavButtonComponent', () => {
  let component: AuNavButtonComponent;
  let fixture: ComponentFixture<AuNavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuNavButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
