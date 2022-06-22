import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensPantsComponent } from './mens-pants.component';

describe('MensPantsComponent', () => {
  let component: MensPantsComponent;
  let fixture: ComponentFixture<MensPantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensPantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
