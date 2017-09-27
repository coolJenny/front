import { Component, OnInit, OnDestroy } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
	selector: 'app-caps',
	templateUrl: './caps.component.html',
	styleUrls: ['./caps.component.css']
})
export class CapsComponent implements OnInit, OnDestroy {
	public id: number;
	private sub: any;

	constructor(private route:ActivatedRoute) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
		})
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
