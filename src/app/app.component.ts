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
  pokemonSelected: Pokemon|undefined;

  constructor() { }
  
  ngOnInit() {
    console.table(this.pokemonListe);
  }

  selectPokemon(pokemonId: string) {
    const pokemon : Pokemon|undefined = this.pokemonListe.find(p => p.id == +pokemonId);
    if (pokemon) {
      
      console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Le pokemon ${pokemonId} n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }
}
