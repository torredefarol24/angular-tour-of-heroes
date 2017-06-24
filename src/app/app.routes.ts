import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent} from './components/dashboard.component';
import { HeroDetailComponent} from './hero-detail.component';

export const AppRoutes: Routes =[
	{
		path: "heroes",
		component: HeroesComponent
	},
	{
		path: "dashboard",
		component: DashboardComponent
	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'detail/:id',
		component: HeroDetailComponent
	}
]