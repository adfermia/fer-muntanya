import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedActivities } from './featured-activities';

describe('FeaturedActivities', () => {
  let component: FeaturedActivities;
  let fixture: ComponentFixture<FeaturedActivities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedActivities],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedActivities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
