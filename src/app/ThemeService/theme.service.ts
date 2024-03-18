// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeSubject = new BehaviorSubject<boolean>(false);
  darkTheme$ = this.darkThemeSubject.asObservable();

  constructor() {}

  toggleTheme() {
    const currentValue = this.darkThemeSubject.getValue();
    this.darkThemeSubject.next(!currentValue);
  }
}
