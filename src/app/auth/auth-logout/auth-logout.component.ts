import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-logout',
  standalone: true,
  imports: [
    CommonModule ,RouterLink
  ],
  templateUrl: './auth-logout.component.html',
  styleUrl: './auth-logout.component.scss'
})
export class AuthLogoutComponent {
  darkTheme: boolean = false;
}
