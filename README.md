# Building the Pokedex MVP!

Welcome to the team! We're thrilled to have you help build the Minimum Viable Product (MVP) for our new Pokedex application. This document outlines the initial phases of development.

We'll be using React, React Router, TypeScript, and Tailwind CSS for this project. Let's build something great!

## Getting Started

### 1. Installation

Clone the repository and install the necessary dependencies:

```bash
npm install
```

### 2. Development Environment

Start the local development server:

```bash
npm run dev
```

Your development environment will be running at `http://localhost:5173`.

**Note:** You might find useful helper functions for interacting with the PokeAPI in the `src/services` directory.

---

## Development Phases

We'll build the MVP in phases, starting simple and adding complexity incrementally.

### Phase 1: Displaying the Pokemon List

**Goal:** Fetch and display the first batch of Pokemon.

1.  **Fetch Initial Data:** When the application loads, fetch the list of Pokemon from `https://pokeapi.co/api/v2/pokemon`. You can use the `getPokemon()` function in `app/services/get-pokemon.ts` to fetch the data.
2.  **Create `<PokedexList />`:** Build a component that takes the fetched Pokemon list (`results` array) and displays the names.

### Phase 2: Viewing Pokemon Details

**Goal:** Allow users to click on a Pokemon in the menu to see its details.

1.  **Fetch Details:** When a Pokemon name in `<PokedexMenu />` is clicked, use the `url` provided for that Pokemon in the initial fetch to get its detailed data (e.g., `https://pokeapi.co/api/v2/pokemon/1/`). You can use the `getPokemonByUrl()` function in `app/services/get-pokemon-by-url.ts` to fetch the data.
2.  **Create `<PokemonDisplay />`:** Build a reusable component to show the Pokemons name, image, and the array of types.

### Phase 3: Pagination & Infinite Scroll
**Goal:** Handle the full list of 1328 Pokemon efficiently.

1. Implement pagination using the ⁠next and ⁠previous URLs from the API

### Phase 4: Search & Filter
**Goal:** Help users find specific Pokemon quickly.

1. Add real-time search by Pokemon name

### Phase 5: Favorites & Local Storage
**Goal:** Let users save their favorite Pokemon.

1. Add a favorite button to each Pokemon
