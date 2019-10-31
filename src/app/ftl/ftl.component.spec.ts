import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtlComponent } from './ftl.component';

describe('FtlComponent', () => {
  let component: FtlComponent;
  let fixture: ComponentFixture<FtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
