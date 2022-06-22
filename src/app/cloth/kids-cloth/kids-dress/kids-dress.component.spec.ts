import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsDressComponent } from './kids-dress.component';

describe('KidsDressComponent', () => {
  let component: KidsDressComponent;
  let fixture: ComponentFixture<KidsDressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsDressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
