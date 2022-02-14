import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresscardComponent } from './progresscard.component';

describe('ProgresscardComponent', () => {
  let component: ProgresscardComponent;
  let fixture: ComponentFixture<ProgresscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
