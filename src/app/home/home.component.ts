import { Component, OnInit, OnDestroy } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public id: number;

	cap_names = [ 'Ewing sarcoma biopsy', 'Ewing sarcoma resection', 'Extragonadal germ cell tumor biopsy/resection',
	'Hepatoblastoma biopsy/resection', 'Kidney tumors biopsy/resection', 'Neuroblastoma biopsy/resection', 'Rhabdomyosarcoma biopsy/resection' ];

	tr11 = ['Bone and soft tissue', 'Breast', 'Central nervous system', 'Endocrine'];
	tr12 = ['Gastrointestinal', 'Genitourinary', 'Gynecologic', 'Head and neck'];
	tr13 = ['Hematologic', 'Ophthalmic', 'Pediatric', 'Skin'];
	tr14 = ['Torax', 'Other', '', ''];

	tr21 = ['Breast', 'Central nervous system', 'Endocrine', 'Gastrointestinal'];
	tr22 = ['Gynecologic', 'Head and neck', 'Hematologic', 'Skin'];
	tr23 = ['Thorax', '', '', ''];

	constructor(private route:ActivatedRoute) { }

	ngOnInit() {
		
	}

}
