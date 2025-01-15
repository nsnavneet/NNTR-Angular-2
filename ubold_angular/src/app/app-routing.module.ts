import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutContainerComponent } from './layout/layout-container.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
      },
      {
        path: 'apps',
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),
      },
    ]
  },
  {
    path: 'auth',
    component: PublicLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'landing',
    component: PublicLayoutComponent,
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./pages/forms/forms.module').then(m => m.FormsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
