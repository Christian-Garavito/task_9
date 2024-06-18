// Importación de React para usar JSX y crear componentes
import React from 'react';



// Definición del componente funcional CardPokemon que recibe un objeto pokemon como prop
export const CardCarulla = ({ pelicula }) => {
    return (
        // Uso de Link para crear un enlace a la ruta específica del Pokémon utilizando su ID
        <> 
            {/* Contenedor para la imagen del Pokémon */}
            <div className='card-img'>
                {/* Etiqueta img para mostrar la imagen del Pokémon */}
                <img
                    // Fuente de la imagen, accediendo a la propiedad específica del objeto pokemon
                    src={pelicula.Poster}
                    // Texto alternativo para la imagen, útil para accesibilidad
                    alt={`${pelicula.Title}`}
                />
            </div>
            {/* Contenedor para la información del Pokémon */}
            <div className='card-info'>
                {/* Muestra el ID del Pokémon */}
                <span className='pokemon-id'>N° {pelicula.imdbID}</span>
                {/* Muestra el nombre del Pokémon */}
                <h3>{pelicula.Title}</h3>
            </div>
            <div>
                <button> agregar</button>
            </div>
        </>
    );
};
