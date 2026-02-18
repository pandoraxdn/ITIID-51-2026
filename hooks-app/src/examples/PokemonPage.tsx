import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {

  const { counter, increment, decrement } = useCounter();
  const { pokemon, formatedId, isLoading } = usePokemon( counter );

  ( isLoading ) && ( () => {
    return (
      <div
        className="
          bg-gradient
          flex
          flex-col
          items-center
        "
      >
        <h1
          className="
            text-2xl
            font-thin
            text-white
          "
        >
          Pokémon
        </h1>
        <h2
          className="
            text-2xl
            font-thin
            text-white
          "
        >
          Cargando...
        </h2>
      </div>
    );
  })();

  ( !pokemon ) && ( () => {
    return (
      <div
        className="
          bg-gradient
          flex
          flex-col
          items-center
        "
      >
        <h1
          className="
            text-2xl
            font-thin
            text-white
          "
        >
          Pokémon
        </h1>
        <h2
          className="
            text-2xl
            font-thin
            text-white
          "
        >
          No encontrado...
        </h2>
      </div>
    );
  })();

  return (
    <div
      className="
        bg-gradient
        flex
        flex-col
        items-center
      "
    >
      <h1
        className="
          text-2xl
          font-thin
          text-white
        "
      >
        Pokemon: { pokemon?.name }
      </h1>
      <img
        src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
        alt={ pokemon?.name }
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
          borderWidth: 3,
          borderColor: "white"
        }}
      />
      <div
        className="flex gap-2 py-2"
      >
        <button
          className="bg-violet-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={ decrement }
        >
          Anterior
        </button>
        <button
          className="bg-violet-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={ increment }
        >
          Posterior
        </button>
      </div>
    </div>
  );
};
