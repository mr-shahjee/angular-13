import { Routes } from '@angular/router';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './material-component/dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

//      {path: "login", component: LoginComponent},
      {path: "dashboard", component: DashboardComponent},

{path: "register", component: RegisterComponent},
      // {
      //   path: 'material-component',
      //   loadChildren:
      //     () => import('./material-component/material.module').then(m => m.MaterialComponentsModule), canActivate: [AuthGuard]

      // },
      {
        path: 'material-component',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)

      },
      {
        path: 'dark-mode',
        component: DarkModeToggleComponent
      },
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      // }
    ]
  }
];
