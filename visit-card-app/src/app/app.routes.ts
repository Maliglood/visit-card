import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home').then((m) => m.Home),
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