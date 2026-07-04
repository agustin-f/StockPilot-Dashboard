import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { Customers } from './pages/customers/customers';
import { Dashboard } from './pages/dashboard/dashboard';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'products', component: Products },
      { path: 'customers', component: Customers },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
