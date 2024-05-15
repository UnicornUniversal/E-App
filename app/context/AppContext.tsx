"use client"

import {useContext, createContext, SetStateAction, Dispatch, useState } from "react";
import { useHeight, useInvoice, useToggle } from "../hooks";
import { IProps, Invoice, Side, ToggleHandler } from "@/types/interfaces";

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
    selectedOptions?: string[]
    setSelectedOptions?: Dispatch<SetStateAction<string[]>>
    invoice?: Invoice
}

const Context = createContext<AppContextTypes>({

    toggle: true,
    handleToggle () {},
    handleAddUserModal () {},
    height: 0,
    setAddUserModal: () => {},

}) 

export const AppContext = ({ children }: IProps) => {

    const [ height ] = useHeight()
    const { invoice } = useInvoice()
    const [ addUserModal, handleAddUserModal, setAddUserModal ] = useToggle(false)
    const [ sideToggle, handleSideToggle, setSideToggle ] = useToggle(true)
    const [ toggle, handleToggle ] = useToggle(true)
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return <Context.Provider value={{ toggle, handleToggle, sideToggle, 
                                    handleSideToggle, setSideToggle,
                                    height, addUserModal, handleAddUserModal, 
                                    setAddUserModal, invoice
                                  }}>

            {children}

        </Context.Provider>
};

export const useAppContext = () => useContext(Context)