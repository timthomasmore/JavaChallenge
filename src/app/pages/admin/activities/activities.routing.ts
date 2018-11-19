import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ActivitiesComponent,
    }
];

export const routing = RouterModule.forChild(childRoutes);
