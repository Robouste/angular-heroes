import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'templates/list.html',
	styleUrls: ['styles/list.css']
})

export class AppComponent {
	title = 'Tour of Heroes';
	hero: Hero = {
		id: 1,
		name: 'Fatman'
	};
	heroes = HEROES;
}

export class Hero {
	id: number;
	name: string;
}

const HEROES: Hero[] = [
	{ id: 11, name: 'Fatman' },
	{ id: 12, name: 'Slipman' },
	{ id: 13, name: 'Scatwoman' },
	{ id: 14, name: 'Celeri' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];