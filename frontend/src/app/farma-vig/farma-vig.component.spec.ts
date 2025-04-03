import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaVigComponent } from './farma-vig.component';

describe('FarmaVigComponent', () => {
  let component: FarmaVigComponent;
  let fixture: ComponentFixture<FarmaVigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmaVigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmaVigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
