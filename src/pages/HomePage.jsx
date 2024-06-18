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
                <h1>hola mundo hola garao</h1>
                
                
                 
                <Outlet/>
            </div>
    );

};