"use client"

import {useContext, createContext, SetStateAction, Dispatch } from "react";
import { useHeight, useToggle } from "../hooks";
import { IProps, Side } from "@/types/interfaces";

interface AppContextTypes {
    toggle?: boolean
    height: number
    handleToggle?: () => void
    sideToggle?: boolean
    handleSideToggle?: () => void
    setSideToggle?: Dispatch<SetStateAction<boolean>>
    addUserModal?: boolean
    handleAddUserModal:  () => void
    setAddUserModal: Dispatch<SetStateAction<boolean>>
    
}

const Context = createContext<AppContextTypes>({

    toggle: true,
    handleToggle () {},
    handleAddUserModal () {},
    height: 0,
    setAddUserModal: () => {}
}) 

export const AppContext = ({ children }: IProps) => {

    const [ height ] = useHeight()
    const [ addUserModal, handleAddUserModal, setAddUserModal ] = useToggle(false)
    const [ sideToggle, handleSideToggle, setSideToggle ] = useToggle(true)
    const [ toggle, handleToggle ] = useToggle(true)

  return <Context.Provider value={{ toggle, handleToggle, sideToggle, 
                                    handleSideToggle, setSideToggle,
                                    height, addUserModal, handleAddUserModal, 
                                    setAddUserModal
                                 }}>

            {children}

        </Context.Provider>
};

export const useAppContext = () => useContext(Context)