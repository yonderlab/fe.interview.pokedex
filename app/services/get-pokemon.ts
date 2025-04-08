import type { PokemonLink } from "~/types/PokemonLink";
import { POKEMON_API_URL } from "~/constants";

async function getPokemon() {
  const pokemon = await fetch(`${POKEMON_API_URL}`);
  const pokemonData = (await pokemon.json()) as {
    results: PokemonLink[];
  };
  return pokemonData.results;
}

export { getPokemon };
