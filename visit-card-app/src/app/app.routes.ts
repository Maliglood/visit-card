import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home').then((m) => m.Home),
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./pages/about/about').then((m) => m.About),
    },
    {
        path: 'event',
        loadComponent: () =>
            import('./pages/event/event').then((m) => m.Event),
    },
    {
        path: '**',
        redirectTo: '',
    },
];