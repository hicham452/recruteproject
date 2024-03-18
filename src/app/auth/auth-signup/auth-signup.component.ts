import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './auth-signup.component.html',
  styleUrl: './auth-signup.component.scss'
})
export class AuthSignupComponent {
  darkTheme: boolean = false;
}
