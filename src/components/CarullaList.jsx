// Importaciones necesarias desde React y componentes específicos
import React, { useContext } from 'react';
import { CarullaContext } from '../context/CarullaContext';
import { CardCarulla } from './CardPokemon';
import { Loader } from './Loader';

// Definición del componente funcional PokemonList
export const CarullaList = () => {
    // Uso del contexto PokemonContext para obtener datos y estado
    const { all, loading, filteredPokemons } = useContext(CarullaContext);

    // Renderizado condicional basado en el estado de carga
    return (
        <>
            {loading ? (
                // Mostrar el componente Loader si está en estado de carga
                <Loader />
            ) : (
                // Mostrar la lista de Pokémon cuando no está en estado de carga
                <div className='card-list-pokemon container'>
                    {/* Mostrar los Pokémon filtrados si existen */}
                    {filteredPokemons.length ? (
                        <>
                            {filteredPokemons.map(pokemon => (
                                // Renderizar el componente CardPokemon para cada Pokémon filtrado
                                <CardCarulla pokemon={pokemon} key={pokemon.id} />
                            ))}
                        </>
                    ) : (
                        // Mostrar todos los Pokémon si no hay Pokémon filtrados
                        <>
                            {allPokemons.map(pokemon => (
                                // Renderizar el componente CardPokemon para cada Pokémon
                                <CardCarulla pokemon={pokemon} key={pokemon.id} />
                            ))}
                        </>
                    )}
                </div>
            )}
        </>
    );
};
