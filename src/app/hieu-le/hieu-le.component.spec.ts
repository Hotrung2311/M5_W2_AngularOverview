import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HieuLeComponent } from './hieu-le.component';

describe('HieuLeComponent', () => {
  let component: HieuLeComponent;
  let fixture: ComponentFixture<HieuLeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HieuLeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HieuLeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
