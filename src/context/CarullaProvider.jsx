import { useEffect,useState } from "react";
import { CarullaContext } from "./CarullaContext";

export const CarullaProvider = ({children})=>{

    return(
        <CarullaContext.Provider
        value={{
            numero:0

        }}>
            {children}
        </CarullaContext.Provider>

    );

};