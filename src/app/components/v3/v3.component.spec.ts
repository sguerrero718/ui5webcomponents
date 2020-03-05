import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V3Component } from './v3.component';

describe('V3Component', () => {
  let component: V3Component;
  let fixture: ComponentFixture<V3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
