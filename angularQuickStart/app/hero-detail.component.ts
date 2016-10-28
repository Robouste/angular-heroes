﻿import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'hero-detail',
	templateUrl: 'templates/hero-detail.html'
})

export class HeroDetailComponent {
	@Input()
	hero: Hero;
}

