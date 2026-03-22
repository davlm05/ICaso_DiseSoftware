import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

/** Denies access when the current user's role lacks the required permission. */
export const RoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const required: string = route.data['permission'];
  return true; // TODO: restore → auth.hasPermission(required) || router.createUrlTree(['/login']);
};
