import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCardModule, MdChipsModule,
  MdIconModule, MdInputModule,
  MdMenuModule,
  MdButtonModule, MdCheckboxModule, MdChipList, MdDialogModule,
  MdSlideToggleModule, MdSnackBar, MdSnackBarModule, MdTabsModule,
} from '@angular/material'
import {TopicTagComponent} from './topic-tag/topic-tag.component'
import {TopicTagListComponent} from './topic-tag-list/topic-tag-list.component'
import {UserTemplateComponent} from '../user-list/user-template/user-template.component';
import {UserInterestsModeViewComponent} from '../user-list/user-template/user-interests-mode-view/user-interests-mode-view.component';
import {SnackBarComponent} from './snackbar/snackbar.component'
import {GeoLocationService} from './geo-location.service'
import {UserGeoLocationsService} from './user-geo-locations.service'
import {RouterModule} from '@angular/router'
import {UserDescriptionsService} from './user-profile/user-descriptions.service'
import {UserTopicsService} from './user-topics.service'
import {DistancePipe} from '../maps/users-map/distance.pipe'
import {PoiService} from './poi.service'
import {HttpClientModule} from '@angular/common/http'
import {GitHubService} from './git-hub.service'
import {StackOverflowService} from './stack-overflow.service'


@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdInputModule,
    MdMenuModule,
    MdCheckboxModule,
    MdIconModule,
    MdChipsModule,
    MdTabsModule,
    MdCardModule,
    MdIconModule,
    MdSnackBarModule,
    MdDialogModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [
    TopicTagComponent,
    TopicTagListComponent,
    UserTemplateComponent,
    UserInterestsModeViewComponent,
    SnackBarComponent,
    DistancePipe,
    // GeolocationService,
  ],
  exports: [
    TopicTagComponent,
    TopicTagListComponent,
    UserTemplateComponent,
    UserInterestsModeViewComponent,
    SnackBarComponent,
    MdInputModule,
    DistancePipe,
    MdTabsModule,
  ],
  providers: [
    SnackBarComponent,
    MdSnackBar,
    MdButtonModule,
    GeoLocationService,
    UserGeoLocationsService,
    UserDescriptionsService,
    UserTopicsService,
    PoiService,
    GitHubService,
    StackOverflowService,
  ]

})
export class SharedModule { }
