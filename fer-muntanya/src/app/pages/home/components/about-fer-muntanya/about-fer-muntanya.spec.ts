import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutFerMuntanya } from './about-fer-muntanya';

describe('AboutFerMuntanya', () => {
  let component: AboutFerMuntanya;
  let fixture: ComponentFixture<AboutFerMuntanya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutFerMuntanya],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutFerMuntanya);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
