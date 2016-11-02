import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'dashboard',
	templateUrl: 'templates/dashboard.component.html',
	styleUrls: ['styles/dashboard.component.css']
})

export class DashboardComponent {
	heroes: Hero[] = [];

	constructor(
		private heroService: HeroService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(0, 4));
	}

	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}
