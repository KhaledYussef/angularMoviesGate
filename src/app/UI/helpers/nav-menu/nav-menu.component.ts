import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/controllers/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styles: [],
})
export class NavMenuComponent implements OnInit {
  constructor(private router: Router,private auth:AuthService) {}

  ngOnInit(): void {
    this.auth.GetLocalToken();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpire');
    this.router.navigate(['login']);
  }
}
