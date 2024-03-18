import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThemeService } from '../../ThemeService/theme.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule , RouterOutlet , RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  darkTheme: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkTheme$.subscribe((darkTheme) => {
      this.darkTheme = darkTheme;
    });
  }
}
