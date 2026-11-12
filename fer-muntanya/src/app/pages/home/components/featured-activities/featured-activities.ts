import { Component } from '@angular/core';
import { ActivityCardComponent } from '../../../../shared/components/activity-card/activity-card';
import { Activity } from '../../../../shared/models/activity.model';


@Component({
  selector: 'app-featured-activities',
  imports: [ActivityCardComponent],
  templateUrl: './featured-activities.html',
  styleUrl: './featured-activities.scss',
})
export class FeaturedActivitiesComponent {

protected activities: Activity[] = [
  {
    id: 1,
    slug: 'curso-escalada-deportiva',
    title: 'Curso de Escalada Deportiva',
    description:
      'Aprende las técnicas fundamentales de progresión, aseguramiento y seguridad para iniciarte en la escalada deportiva con autonomía.',
    imageUrl: '/images/activities/monolargo.jpg',
    duration: '1 día',
    level: 'Monolargo',
  },
  {
    id: 2,
    slug: 'curso-escalada-multilargo',
    title: 'Curso de Escalada en Varios Largos',
    description:
      'Domina reuniones, rápeles, gestión de cuerdas y maniobras esenciales para afrontar itinerarios de varios largos con seguridad.',
    imageUrl: '/images/activities/multilargo.jpg',
    duration: '2 días',
    level: 'Multilargo',
  },
  {
    id: 3,
    slug: 'escalada-penon-ifach',
    title: "Escalada en el Peñón d'Ifach",
    description:
      'Vive una ascensión guiada en una de las paredes más emblemáticas de la Costa Blanca con vistas únicas sobre el Mediterráneo.',
    imageUrl: '/images/activities/ifach.jpg',
    duration: 'Jornada completa',
    level: 'Experiencia guiada',
  },
];
}
