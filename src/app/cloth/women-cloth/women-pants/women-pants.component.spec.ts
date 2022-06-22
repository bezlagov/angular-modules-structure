import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenPantsComponent } from './women-pants.component';

describe('WomenPantsComponent', () => {
  let component: WomenPantsComponent;
  let fixture: ComponentFixture<WomenPantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenPantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
