import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ShopComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
