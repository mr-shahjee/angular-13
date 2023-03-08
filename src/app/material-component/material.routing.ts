import { Routes } from '@angular/router';

import { Gad7Component } from './Gad7/gad7.component';
import { GridComponent } from './grid/grid.component';
import { ShowSchemaComponent } from './show-schema/show-schema.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { BuilderComponent } from './builder/builder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { DarkModeToggleComponent } from '../dark-mode-toggle/dark-mode-toggle.component';

export const MaterialRoutes: Routes = [
{
    path: 'gad7',
    component: Gad7Component
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'show-schema',
    component: ShowSchemaComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'builder',
    component: BuilderComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'new-appointment',
    component: NewAppointmentComponent
  },
  {
    path: 'dark',
    component: DarkModeToggleComponent
  },
];
