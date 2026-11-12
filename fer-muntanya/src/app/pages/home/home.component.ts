import { Component } from '@angular/core';
import { AboutPreview } from './components/about-preview/about-preview';
import { FeaturedActivitiesComponent } from './components/featured-activities/featured-activities';

@Component({
  imports: [AboutPreview, FeaturedActivitiesComponent],
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
