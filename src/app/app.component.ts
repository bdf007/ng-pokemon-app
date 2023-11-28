import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import  { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'Liste de Pokémons';
  pokemonListe: Pokemon[] = POKEMONS;

  constructor() { }
  
  ngOnInit() {
    console.table(this.pokemonListe);
  }

  selectPokemon(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonListe[index].name}`);
  }
}
