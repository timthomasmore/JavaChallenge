import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './../menu-levels/menu-levels.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

/* components */
import { AdminComponent } from './admin.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AllowrewardsComponent } from './allowrewards/allowrewards.component';
//import { Levels2Component } from './components/levels-2/levels-2.component';

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
export class MenuLevelsModule { }
