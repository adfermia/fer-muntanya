import { Component } from '@angular/core';
import { AboutPreview } from './components/about-preview/about-preview';
import { FeaturedActivitiesComponent } from './components/featured-activities/featured-activities';
import { AboutFerMuntanyaComponent } from './components/about-fer-muntanya/about-fer-muntanya';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us';
import { HomeCtaComponent } from './components/home-cta/home-cta';

@Component({
  imports: [AboutPreview, FeaturedActivitiesComponent, AboutFerMuntanyaComponent, WhyChooseUsComponent, HomeCtaComponent],
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
