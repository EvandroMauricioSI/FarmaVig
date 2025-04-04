import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfeitosColateraisComponent } from './efeitos-colaterais.component';

describe('EfeitosColateraisComponent', () => {
  let component: EfeitosColateraisComponent;
  let fixture: ComponentFixture<EfeitosColateraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EfeitosColateraisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfeitosColateraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
