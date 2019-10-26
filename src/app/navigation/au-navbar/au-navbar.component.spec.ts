import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuNavbarComponent } from './au-navbar.component';

describe('AuNavbarComponent', () => {
  let component: AuNavbarComponent;
  let fixture: ComponentFixture<AuNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
