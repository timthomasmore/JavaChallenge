import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AllowrewardsComponent } from './allowrewards/allowrewards.component';
import { RewardsComponent } from './rewards/rewards.component';

import {GuardActivitiesGuard} from "../../guards/guard-activities.guard";
import {GuardApproveGuard} from "../../guards/guard-approve.guard";
import {GuardShopGuard} from "../../guards/guard-shop.guard";

const childRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'admin', pathMatch: 'full' },
            { path: 'activities', component: ActivitiesComponent, canActivate: [GuardActivitiesGuard] },
            { path: 'rewards', component: RewardsComponent, canActivate: [GuardShopGuard] },
            { path: 'allowrewards', component: AllowrewardsComponent, canActivate: [GuardApproveGuard] },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
