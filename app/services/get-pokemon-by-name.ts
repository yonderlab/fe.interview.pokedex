import { POKEMON_API_URL } from "~/constants";
import type { Pokemon } from "~/types/Pokemon";

async function getPokemonByName(name: string) {
  const pokemon = await fetch(`${POKEMON_API_URL}/${name}`);
  return (await pokemon.json()) as Pokemon;
}

export { getPokemonByName };
