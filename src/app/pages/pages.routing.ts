import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from "../guards/auth.guard";

export const childRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pages',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      {path: 'index', loadChildren: './index/index.module#IndexModule'},
      {path: 'editor', loadChildren: './editor/editor.module#EditorModule'},
      {path: 'shop', loadChildren: './shop/shop.module#ShopModule'},
      {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
      {path: 'form', loadChildren: './form/form.module#FormModule'},
      {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
      {path: 'ui', loadChildren: './ui/ui.module#UIModule'},
      {path: 'table', loadChildren: './table/table.module#TableModule'},
      {path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule'},
      {path: 'activiteit', loadChildren: './activiteit/activiteit.module#ActiviteitModule'},
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
