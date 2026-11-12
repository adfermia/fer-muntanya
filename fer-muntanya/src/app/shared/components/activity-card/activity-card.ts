import { Component, input } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-activity-card',
  imports: [RouterLink],
  templateUrl: './activity-card.html',
  styleUrl: './activity-card.scss',
})
export class ActivityCardComponent {
  activity = input.required<Activity>();
}