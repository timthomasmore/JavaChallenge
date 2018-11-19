import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './profile.routing';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        NgxEchartsModule
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule { }
