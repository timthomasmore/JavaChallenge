import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {InterceptService} from "./shared/services/intercept.service";
import {AuthGuard} from "./guards/auth.guard";
import {AuthService} from "./shared/services/auth.service";
import {GuardShopGuard} from "./guards/guard-shop.guard";
import {GuardApproveGuard} from "./guards/guard-approve.guard";
import {GuardActivitiesGuard} from "./guards/guard-activities.guard";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    routing,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    GuardShopGuard,
    GuardApproveGuard,
    GuardActivitiesGuard,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true },
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
