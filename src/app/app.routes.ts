import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'advice',
    loadComponent: () => import('./pages/advice/advice.page').then( m => m.AdvicePage)
  },
  {
    path: 'agree',
    loadComponent: () => import('./pages/agree/agree.page').then( m => m.AgreePage)
  },
];
