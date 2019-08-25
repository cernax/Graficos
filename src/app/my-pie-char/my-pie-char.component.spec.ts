import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPieCharComponent } from './my-pie-char.component';

describe('MyPieCharComponent', () => {
  let component: MyPieCharComponent;
  let fixture: ComponentFixture<MyPieCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPieCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPieCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
