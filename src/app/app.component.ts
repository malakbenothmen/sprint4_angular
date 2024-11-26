import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AgenceProj';

  constructor(public authService: AuthService , private router : Router)
  {}
  ngOnInit() {
    if (typeof window !== 'undefined') { // Check if in browser environment
      const isLoggedIn: string | null = localStorage.getItem('isloggedIn');
      const loggedUser: string | null = localStorage.getItem('loggedUser');
  
      if (isLoggedIn !== 'true' || !loggedUser) {
        this.router.navigate(['/login']);
      } else {
        this.authService.setLoggedUserFromLocalStorage(loggedUser);
      }
    } else {
      console.warn('localStorage is not available in this environment.');
    }
  }
  
  onLogout()
  {
    this.authService.logout();
  }
}
