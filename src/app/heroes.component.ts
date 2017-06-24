import { Component, OnInit } from '@angular/core';
import { Hero} from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
	hero: Hero = {
		id: 1,
		name: "WindStorm"
	}
	heroes: Hero[];
	selectedHero: Hero;
	onSelect(hero: Hero): void{
		this.selectedHero = hero;
	}
	constructor(private heroService: HeroService, private router: Router){}

	fetchHeroes(): void{
		this.heroService.getHeroes().then(data_heroes => this.heroes = data_heroes);
	}

	goToDetail(){
		this.router.navigate(['/detail', this.selectedHero.id])
	}
	
	ngOnInit(): void{
		this.fetchHeroes();
	}
	
	add(name: string): void{
		name = name.trim();
		if (!name){ return; }
		this.heroService.create(name).then(hero => {
			this.heroes.push(hero);
			this.selectedHero = null;
		});
	}

	delete(hero: Hero): void{
		this.heroService.delete(hero.id).then(()=> {
			this.heroes = this.heroes.filter(h => h!== hero);
			if (this.selectedHero === hero){
				this.selectedHero = null;
			}
		});
	}
	
}

