import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
	canActivate(){
		return this.afa.authState.map((authState) => {
			if(!!authState){
				return true;
			}else{
				this.router.navigateByUrl("");
			}
			return false;
		});
	}
	constructor(private router: Router, private afa: AngularFireAuth){}
}
