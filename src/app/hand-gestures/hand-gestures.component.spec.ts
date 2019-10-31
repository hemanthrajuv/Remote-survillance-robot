import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandGesturesComponent } from './hand-gestures.component';

describe('HandGesturesComponent', () => {
  let component: HandGesturesComponent;
  let fixture: ComponentFixture<HandGesturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandGesturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandGesturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
