import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuUploadComponent } from './au-upload.component';

describe('AuUploadComponent', () => {
  let component: AuUploadComponent;
  let fixture: ComponentFixture<AuUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
