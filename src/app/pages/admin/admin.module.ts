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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        AdminComponent,
        RewardsComponent,
        ActivitiesComponent,
        AllowrewardsComponent
    ]
})
export class AdminModule { }
