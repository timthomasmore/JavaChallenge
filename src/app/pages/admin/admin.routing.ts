import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AllowrewardsComponent } from './allowrewards/allowrewards.component';
import { RewardsComponent } from './rewards/rewards.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'admin', pathMatch: 'full' },
            { path: 'activities', component: ActivitiesComponent },
            { path: 'rewards', component: RewardsComponent },
            { path: 'allowrewards', component: AllowrewardsComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
