import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextCategoryComponent } from './next-category.component';

describe('NextCategoryComponent', () => {
  let component: NextCategoryComponent;
  let fixture: ComponentFixture<NextCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
