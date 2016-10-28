import { Component } from '@angular/core';
import { Hero } from './hero';

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

@Component({
	selector: 'app',
	templateUrl: 'templates/list.html',
	styleUrls: ['styles/list.css']
})

export class AppComponent {

	title = 'Tour of Heroes';
	selectedHero: Hero;
	heroes = HEROES;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
