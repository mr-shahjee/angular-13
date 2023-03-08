import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';

import { ShowSchemaComponent } from './show-schema/show-schema.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { GridModule } from "@progress/kendo-angular-grid";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { BuilderComponent } from './builder/builder.component';
import {  FormioModule, FormioAppConfig } from '@formio/angular';
import { ToastrserviceService } from '../services/toastrservice.service';
import { AuthService } from '../services/auth.service';
import { AppConfig } from '../shared/formio-config';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { OurVisiterComponent } from './dashboard-components/our-visiter/our-visiter.component';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { NewClientComponent } from './new-client/new-client.component';
import { MatCardModule } from '@angular/material/card';
import { ProfileComponent } from './profile/profile.component';
//import { NgToastModule } from 'ng-angular-popup';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    GridModule,
    ButtonsModule,
    InputsModule,
    FormioModule,
    NgApexchartsModule,
    DropDownsModule,
    MatCardModule,


  ],
  providers:  [AuthService, ToastrserviceService,{provide: FormioAppConfig, useValue: AppConfig},],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    ShowSchemaComponent,
    MenuComponent,
    BuilderComponent,
    ToolbarComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SlideToggleComponent,
    DashboardComponent,
    ActivityTimelineComponent,
    ContactsComponent,
    ProfileComponent,
    OurVisiterComponent,
    SalesOverviewComponent,    NewAppointmentComponent,
    NewClientComponent,
    ProfileComponent,
  ]
})
export class MaterialComponentsModule {}
