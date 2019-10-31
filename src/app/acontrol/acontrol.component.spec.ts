import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcontrolComponent } from './acontrol.component';

describe('AcontrolComponent', () => {
  let component: AcontrolComponent;
  let fixture: ComponentFixture<AcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
