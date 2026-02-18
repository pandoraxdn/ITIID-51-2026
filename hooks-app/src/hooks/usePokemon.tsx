import { useEffect, useState } from "react";

interface Pokemon {
    id:       number;
    name:     string;
    imageUrl: string;
}

interface UsePokemon{
    isLoading:  boolean;
    pokemon:    Pokemon | null;
    formatedId: string;
}

export const usePokemon = ( id: number ): UsePokemon => {
  const [ pokemon, setPokemon ] = useState<Pokemon|null>(null);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  const getPokemonById = async ( id: number )=>{
    setIsLoading(false);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPokemon({
      id,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    }); 
    setIsLoading(false);
  }

  useEffect(() => {
    getPokemonById(id);
  },[id]);

  return {
    isLoading,
    pokemon,
    formatedId: id.toString().padStart(3,"0")
  }
};
