import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return of(true).pipe(
      switchMap((isLogged: boolean) => {
        if (!isLogged && (state.url === '/login' || state.url === '/sign-up')) {
          return of(true);
        }
        if (isLogged && (state.url === '/login' || state.url === '/sign-up')) {
          this.router.navigate(['/admin-panel']);
          return of(false);
        }
        if (!isLogged) {
          this.router.navigate(['/login']);
        }
        return of(isLogged);
      })
    );
  }
}
