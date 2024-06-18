import { useEffect,useState } from "react";
import { CarullaContext } from "./CarullaContext";

export const CarullaProvider = ({children})=>{
    // esto es un estado
    const [allCarulla, setAllCarulla] =useState([]);

    const getAllCarulla = async (nombrePelicula,page =1) =>{
        const baseURL = 'http://www.omdbapi.com/?apikey=3923e2e&type=movie'

        const res = await fetch(
            `${baseURL}&page=${page}&s=${nombrePelicula}`
        );
        // arduini data=0
        const data = await res.json();
        // usar
         const {Search} =data;
    
        setAllCarulla([...Search]);
    }

    return(
        <CarullaContext.Provider
        value={{
            allCarulla,
            getAllCarulla,

        }}>
            {children}
        </CarullaContext.Provider>

    );

};