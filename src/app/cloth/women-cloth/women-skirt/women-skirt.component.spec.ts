import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSkirtComponent } from './women-skirt.component';

describe('WomenSkirtComponent', () => {
  let component: WomenSkirtComponent;
  let fixture: ComponentFixture<WomenSkirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenSkirtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenSkirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
