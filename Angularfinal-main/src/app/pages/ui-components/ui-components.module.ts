import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';
//Import all material modules
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ui components
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { ChambreInfoComponent } from './chambre-info/chambre-info.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { MatNativeDateModule } from '@angular/material/core';
import { UniversiteDataComponent } from './universite-data/universite-data.component';
import { UniversiteAjoutComponent } from './universite-ajout/universite-ajout.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AppDashboardComponent } from '../dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UserInfoComponent } from './user-info/user-info.component';

import { AffecterFoyerAUniversiteComponent } from './affecter-foyer-auniversite/affecter-foyer-auniversite.component';
import { AffecterChambreABlocComponent } from './affecter-chambre-abloc/affecter-chambre-abloc.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
    NgApexchartsModule,MatCardModule
  ],
  declarations: [
    AppBadgeComponent,
    AppChipsComponent,
    AppListsComponent,
    AppMenuComponent,
    AppTooltipsComponent,
    UniversiteDataComponent,
    UniversiteAjoutComponent,
    UniversiteUpdateComponent,
    ChambreInfoComponent,
    ReservationCardComponent,
    ReservationListComponent,
    AppDashboardComponent,
    UserInfoComponent,

    AffecterFoyerAUniversiteComponent,
    AffecterChambreABlocComponent
  ],
})
export class UicomponentsModule { }
