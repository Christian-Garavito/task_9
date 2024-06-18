import React, { useContext } from 'react';
import { CarullaList } from '../components/CarullaList';
import { CarullaContext } from '../context/CarullaContext';

export const Carrito =()=>{
    const {peliculasCarrito} = useContext(CarullaContext);

    return(
        <>
        <div>
            <h1>Pollo, Carnes y pescado</h1>
        </div>
        <div>
        <CarullaList listaPeliculas={peliculasCarrito} agregar={false} />
        </div>
        </>
    )

}