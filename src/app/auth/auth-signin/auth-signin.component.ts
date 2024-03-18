import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './auth-signin.component.html',
  styleUrl: './auth-signin.component.scss'
})
export class AuthSigninComponent {
  darkTheme: boolean = false;
}
