// import { create } from 'zustand';
'use client'
import { createContext,useState } from "react";
export const DataContext = createContext();

export const DataProvider=({children})=>{

const [toggle, setToggle] = useState(false);

const value={
    toggle,
    setToggle
}


    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}