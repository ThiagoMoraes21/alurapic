import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: 'ap-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
	
	public filter: string = '';
	public debounce: Subject<string> = new Subject<string>();
	
	constructor() { }

	ngOnInit(): void {
		this.debounce
			.pipe(debounceTime(300))
			// .subscribe(filter => this.filter = filter);
	}

	ngOnDestroy(): void {
		this.debounce.unsubscribe();
	}
}
