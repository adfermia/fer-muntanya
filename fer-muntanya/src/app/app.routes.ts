import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(c => c.HomeComponent),
    title: 'Inicio'
  },
  {
    path: 'actividades',
    loadComponent: () =>
      import('./pages/activities/activities.component')
        .then(c => c.ActivitiesComponent),
    title: 'Actividades'
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component')
        .then(c => c.BlogComponent),
    title: 'Blog'
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component')
        .then(c => c.ContactComponent),
    title: 'Contacto'
  }
];