import type { Pokemon } from "~/types/Pokemon";

async function getPokemonByUrl(url: string) {
  const pokemon = await fetch(url);
  return (await pokemon.json()) as Pokemon;
}

export { getPokemonByUrl };
