import { Routes, RouterModule } from '@angular/router';
import { RewardsComponent } from './rewards.component';

const childRoutes: Routes = [
    {
        path: '',
        component: RewardsComponent,
    }
];

export const routing = RouterModule.forChild(childRoutes);
