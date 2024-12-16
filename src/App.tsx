import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "./graphql/pokemons";
import { PokemonItem } from "./types/pokemon";

function App() {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="container cards">
      {data?.pokemons.results.map(
        ({ name, url, image }: PokemonItem, index: number) => (
          <div className="card" key={index}>
            <a href={url}>
              <img src={image} alt={name} className="img" />
              <p>{name}</p>
            </a>
          </div>
        )
      )}
    </div>
  );
}

export default App;
