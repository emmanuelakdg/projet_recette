import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelIngrComponent } from './del-ingr.component';

describe('DelIngrComponent', () => {
  let component: DelIngrComponent;
  let fixture: ComponentFixture<DelIngrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelIngrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelIngrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
