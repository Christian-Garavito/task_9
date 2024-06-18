// Importaciones necesarias desde React y componentes específicos
import React, { useContext } from 'react';
import { CarullaContext } from '../context/CarullaContext';
import { CardCarulla } from './CardCarulla';
import { Loader } from './Loader';

// Definición del componente funcional PokemonList
export const CarullaList = () => {
    // Uso del contexto PokemonContext para obtener datos y estado
    const { allCarulla, loading } = useContext(CarullaContext);

    // Renderizado condicional basado en el estado de carga
    const [textoBusqueda, setTextoBusqueda] =useState("");
    return (
        <>
            {loading ? (
                // Mostrar el componente Loader si está en estado de carga
                <Loader />
            ) : (
                // Mostrar la lista de Pokémon cuando no está en estado de carga
                <div className='card-list-pokemon container'>
                    {/* Mostrar los Pokémon filtrados si existen */}
                            {allCarulla.map((pelicula,index) => (
                                // Renderizar el componente CardPokemon para cada Pokémon
                                // index nunca cambia y asi los puede editar la llave de cada pelicula
                                <CardCarulla pelicula={pelicula} key={index} />
                            ))}
                </div>
            )}
        </>
    );
};
