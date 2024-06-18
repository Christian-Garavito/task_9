import { useEffect,useState } from "react";
import { CarullaContext } from "./CarullaContext";

export const CarullaProvider = ({children})=>{
    const [allCarulla, setAllCarulla] =useState([]);

    const getAllCarulla = async (limit = 30) =>{
        const baseURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=3923e2e'

        const res = await fetch(
            `${baseURL}carulla?limit=${limit}&offset=${offset}`
        );
        const data =await res.json();
        
        const promises = data.results.map(async carulla =>{
            const res = await fetch(carrulla.url);
            const data = await res.json();
            return data;
        });
        const results = await Promise.all(promises);

        SetALLCarulla([...results]);
    }

    return(
        <CarullaContext.Provider
        value={{
            allCarulla,

        }}>
            {children}
        </CarullaContext.Provider>

    );

};