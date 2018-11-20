import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './admin.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

/* components */
import { AdminComponent } from './admin.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AllowrewardsComponent } from './allowrewards/allowrewards.component';
import { ModalModule } from 'ngx-modal';
import {FileTreeComponent} from '../ui/components/file-tree/file-tree.component';
import {ProgressBarComponent} from '../ui/components/progress-bar/progress-bar.component';
import {NotificationComponent} from '../ui/components/notification/notification.component';
import {LoadingComponent} from '../ui/components/loading/loading.component';
import {ModalsComponent} from '../ui/components/modals/modals.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ModalModule,
        routing,
    ],
    declarations: [
        AdminComponent,
        RewardsComponent,
        ActivitiesComponent,
        AllowrewardsComponent,
      NotificationComponent,
      FileTreeComponent,
      LoadingComponent,
      ProgressBarComponent,
      ModalsComponent
    ]
})
export class AdminModule { }
