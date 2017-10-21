import {SplashComponent} from '../splash/splash.component';
import {SignoutComponent} from '../signout/signout.component';
import {CreateprofileComponent} from '../createprofile/createprofile.component';
import {CreateHiringProfileComponent} from '../create-hiring-profile/create-hiring-profile.component';

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
		path: 'createprofile',
		component: CreateprofileComponent
	},
	{
		path: 'createhiringprofile',
		component: CreateHiringProfileComponent
	}
];