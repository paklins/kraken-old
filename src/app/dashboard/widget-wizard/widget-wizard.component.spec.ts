import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWizardComponent } from './widget-wizard.component';

describe('WidgetWizardComponent', () => {
  let component: WidgetWizardComponent;
  let fixture: ComponentFixture<WidgetWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
