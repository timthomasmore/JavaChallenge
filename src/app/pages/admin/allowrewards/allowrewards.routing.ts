import { Routes, RouterModule } from '@angular/router';
import { AllowrewardsComponent } from './allowrewards.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AllowrewardsComponent,
    }
];

export const routing = RouterModule.forChild(childRoutes);
