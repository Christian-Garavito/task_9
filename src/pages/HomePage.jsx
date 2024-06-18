import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { CarullaContext } from '../context/CarullaContext';
import NavBar from '../components/NavBar';

export const HomePage = () => {

    const contexto = useContext(CarullaContext)
    console.log(contexto)

    return (
            <div>
                <NavBar />
                <div>
                <h1>Pollo, Carnes y pescado</h1>
                </div>
                <div>
                    <img src="./img/imagen1" alt="carulla imagen" />
                </div>
                
                 
                <Outlet/>
            </div>
    );

};