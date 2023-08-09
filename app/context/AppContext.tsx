"use client"

import {useContext, createContext, SetStateAction, Dispatch } from "react";
import { useToggle } from "../hooks";
import { IProps, Side } from "@/types/interfaces";

interface AppContextTypes {
    toggle?: boolean
    handleToggle?: () => void
    sideToggle?: boolean
    handleSideToggle?: () => void
    setSideToggle?: Dispatch<SetStateAction<boolean>>
}

const Context = createContext<AppContextTypes>({

    toggle: true,
    handleToggle () {}

}) 

export const AppContext = ({ children }: IProps) => {
    const [ sideToggle, handleSideToggle, setSideToggle ] = useToggle(true)
    const [ toggle, handleToggle ] = useToggle(true)

  return <Context.Provider value={{ toggle, handleToggle, sideToggle, 
                                    handleSideToggle, setSideToggle
                                    
                                 }}>

            {children}

        </Context.Provider>
};

export const useAppContext = () => useContext(Context)