import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFormControlComponent } from './single-form-control.component';

describe('SingleFormControlComponent', () => {
  let component: SingleFormControlComponent;
  let fixture: ComponentFixture<SingleFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleFormControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
