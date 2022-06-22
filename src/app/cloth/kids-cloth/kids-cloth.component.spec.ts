import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsClothComponent } from './kids-cloth.component';

describe('KidsClothComponent', () => {
  let component: KidsClothComponent;
  let fixture: ComponentFixture<KidsClothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsClothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
