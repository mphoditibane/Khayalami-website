import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProvidersComponent } from './health-providers.component';

describe('HealthProvidersComponent', () => {
  let component: HealthProvidersComponent;
  let fixture: ComponentFixture<HealthProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
