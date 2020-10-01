import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
	selector: 'ap-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public user$: Observable<User>;

	constructor(userService: UserService) {
		this.user$ = userService.getUser();
	}
}
