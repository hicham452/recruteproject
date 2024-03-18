import { Routes } from '@angular/router';
import { AuthLogoutComponent } from './auth/auth-logout/auth-logout.component';
import { AuthSigninComponent } from './auth/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [

      { path: '', component: LayoutComponent, loadChildren: () => import('./layout/layouts.route').then(mod => mod.ADMIN_ROUTES)},

      // Auth
      { path: 'auth-logout', component: AuthLogoutComponent },
      { path: 'auth-signin', component: AuthSigninComponent },
      { path: 'auth-signup', component: AuthSignupComponent },
];
