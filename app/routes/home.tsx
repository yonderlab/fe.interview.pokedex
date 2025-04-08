import type { Route } from "./+types/home";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Pokedex" },
    { name: "description", content: "Pokedex" },
  ];
}

export default function Home() {
  return <div>
    Hello, world!
  </div>;
}
