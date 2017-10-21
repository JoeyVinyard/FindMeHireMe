import {SplashComponent} from '../splash/splash.component';
import {CreateprofileComponent} from '../createprofile/createprofile.component';

export const routes = [
	{
		path: '',
		component: SplashComponent
	},
	{
		path: 'createprofile',
		component: CreateprofileComponent
	}
];