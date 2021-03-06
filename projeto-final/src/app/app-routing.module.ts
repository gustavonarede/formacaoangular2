import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingComponent } from './dashboard/dashboard-routing.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
		
	}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
