import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { RoleGuard } from './core/auth/role.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/login/components/login.component').then(m => m.LoginComponent) },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'configure', canActivate: [RoleGuard], loadComponent: () => import('./features/configure-generator/components/configure-generator.component').then(m => m.ConfigureGeneratorComponent) },
      { path: 'progress', canActivate: [RoleGuard], loadComponent: () => import('./features/progress-monitoring/components/progress-monitoring.component').then(m => m.ProgressMonitoringComponent) },
      { path: 'result', canActivate: [RoleGuard], loadComponent: () => import('./features/result-export/components/result-export.component').then(m => m.ResultExportComponent) },
      { path: '', redirectTo: 'configure', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
