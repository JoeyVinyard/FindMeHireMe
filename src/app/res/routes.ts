import {SplashComponent} from '../splash/splash.component';
import {SignoutComponent} from '../signout/signout.component';
import {SigninComponent} from '../signin/signin.component';
import {CreateprofileComponent} from '../createprofile/createprofile.component';
import {CreateHiringProfileComponent} from '../create-hiring-profile/create-hiring-profile.component';
import {MapComponent} from '../map/map.component';

import {AuthGuard} from '../services/auth-guard.service'

export const routes = [
	{
		path: '',
		component: SplashComponent
	},
	{
		path: 'signout',
		component: SignoutComponent
	},
	{
		path: 'signin',
		component: SigninComponent
	},
	{
		path: 'createprofile',
		component: CreateprofileComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'createhiringprofile',
		component: CreateHiringProfileComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'map',
		component: MapComponent,
		canActivate: [AuthGuard]
	}
];