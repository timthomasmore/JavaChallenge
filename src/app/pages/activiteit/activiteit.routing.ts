import { Routes, RouterModule } from '@angular/router';
import { ActiviteitComponent } from './activiteit.component';
import { HistoriekComponent } from './components/historiek/historiek.component';
import { ActiviteitToevoegenComponent } from './components/activiteit-toevoegen/activiteit-toevoegen.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ActiviteitComponent,
        children: [
            { path: '', redirectTo: 'levels1', pathMatch: 'full' },
            { path: 'historiek', component: HistoriekComponent },
            { path: 'toevoegen', component: ActiviteitToevoegenComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
