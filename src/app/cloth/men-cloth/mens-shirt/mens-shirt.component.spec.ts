import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensShirtComponent } from './mens-shirt.component';

describe('MensShirtComponent', () => {
  let component: MensShirtComponent;
  let fixture: ComponentFixture<MensShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensShirtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
