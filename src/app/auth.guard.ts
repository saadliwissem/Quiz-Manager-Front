import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is authenticated (e.g., check if there's a token in local storage)
    const isAuthenticated = localStorage.getItem('token') !== null;
    
    if (isAuthenticated) {
      // If authenticated, allow navigation
      return true;
    } else {
      // If not authenticated, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
