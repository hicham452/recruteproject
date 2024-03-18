import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';

@Component({
  selector: 'app-admin-create-post',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './admin-create-post.component.html',
  styleUrl: './admin-create-post.component.scss'
})
export class AdminCreatePostComponent {
  darkTheme: boolean = false;
}
