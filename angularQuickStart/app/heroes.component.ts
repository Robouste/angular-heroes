﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'heroes',
	templateUrl: 'templates/heroes.component.html',
	styleUrls: ['styles/heroes.component.css'] 
})

export class HeroesComponent implements OnInit {
	
	selectedHero: Hero; 
	heroes: Hero[];

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	constructor(
		private heroService: HeroService,
		private router: Router
	) { }
}
