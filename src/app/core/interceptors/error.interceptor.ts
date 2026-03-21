import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ExceptionHandlingService } from '../exception-handling/exception-handling.service';

/** Routes HTTP errors: 401 → session invalidation, 403 → access denied, 5xx → alert. */
export const errorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      inject(ExceptionHandlingService).handle(err);
      return throwError(() => err);
    })
  );
