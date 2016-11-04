import { NgModule }			from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';
import { FormsModule }		from '@angular/forms';
import { HttpModule }		from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }	from '../services/in-memory-data.service';

import '../extensions/rxjs-extensions';

import { AppComponent }			from '../components/app.component';
import { HeroesComponent }		from '../components/heroes.component';
import { HeroDetailComponent }	from '../components/hero-detail.component';
import { DashboardComponent }	from '../components/dashboard.component';
import { HeroSearchComponent }	from '../components/hero-search.component';

import { HeroService }		from '../services/hero.service';

import { AppRoutingModule } from '../modules/app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		DashboardComponent,
		HeroSearchComponent
	],
	bootstrap: [AppComponent],
	providers: [HeroService]
})

export class AppModule { }
