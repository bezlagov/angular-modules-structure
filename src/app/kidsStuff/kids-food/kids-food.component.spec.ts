import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsFoodComponent } from './kids-food.component';

describe('KidsFoodComponent', () => {
  let component: KidsFoodComponent;
  let fixture: ComponentFixture<KidsFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
