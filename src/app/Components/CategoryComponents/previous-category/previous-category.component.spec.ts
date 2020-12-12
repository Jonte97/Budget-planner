import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCategoryComponent } from './previous-category.component';

describe('PreviousCategoryComponent', () => {
  let component: PreviousCategoryComponent;
  let fixture: ComponentFixture<PreviousCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
