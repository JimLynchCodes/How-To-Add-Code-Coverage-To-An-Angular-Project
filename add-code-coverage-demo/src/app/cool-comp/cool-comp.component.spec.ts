import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolCompComponent } from './cool-comp.component';

describe('CoolCompComponent', () => {
  let component: CoolCompComponent;
  let fixture: ComponentFixture<CoolCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 42 when given true', () => {
    expect(component.foo(true)).toBe(42)
  })
  
  it('should return 0 when given false', () => {
    expect(component.foo(false)).toEqual(0)
  })

});
