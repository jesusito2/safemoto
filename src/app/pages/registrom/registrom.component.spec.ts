import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistromComponent } from './registrom.component';

describe('RegistromComponent', () => {
  let component: RegistromComponent;
  let fixture: ComponentFixture<RegistromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
