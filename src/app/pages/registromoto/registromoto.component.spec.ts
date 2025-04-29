import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistromotoComponent } from './registromoto.component';

describe('RegistromotoComponent', () => {
  let component: RegistromotoComponent;
  let fixture: ComponentFixture<RegistromotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistromotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistromotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
