import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangComponent } from './dang.component';

describe('DangComponent', () => {
  let component: DangComponent;
  let fixture: ComponentFixture<DangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
