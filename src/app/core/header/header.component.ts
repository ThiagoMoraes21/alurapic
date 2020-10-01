import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
	selector: 'ap-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public user$: Observable<User>;
	public user: User;

	constructor(userService: UserService) {
		this.user$ = userService.getUser();
		this.user$.subscribe(user => this.user = user);
	}

	ngOnInit(): void {
	}

}
