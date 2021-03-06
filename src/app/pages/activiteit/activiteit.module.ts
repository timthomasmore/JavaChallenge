import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './activiteit.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

/* components */
import { ActiviteitComponent } from './activiteit.component';
import { HistoriekComponent } from './components/historiek/historiek.component';
import { ActiviteitToevoegenComponent } from './components/activiteit-toevoegen/activiteit-toevoegen.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        ActiviteitComponent,
        HistoriekComponent,
        ActiviteitToevoegenComponent
    ]
})
export class ActiviteitModule { }
