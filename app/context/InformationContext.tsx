"use client"

import {useContext, createContext, SetStateAction, Dispatch, useState } from "react";
import { useHeight, useInvoice, useToggle } from "../hooks";
import { IProps, Invoice, ProductLine, Side, ToggleHandler } from "@/types/interfaces";
import { initialInvoice, initialProductLine } from "../components/forms/NewInvoiceComponents/data/initialData";

interface InformationContextTypes {
    storeToLocalStorage: () => void
    invoice: Invoice
    invoiceItem: ProductLine[]
    handleChange: (e: React.ChangeEvent<HTMLInputElement>)   => void
    handleItemChange: (index: number, e:  React.ChangeEvent<HTMLInputElement>) => void
    handleAdd: () => void
    handleRemove: (i: number)  => void
    invoiceDate?: any 
    dateFormat: string
    invoiceDueDate?: Date
    calculateAmount: (quantity: string, price: string, tax: string) => string
    subTotal?: number
    saleTax?: number
    selectedTaxRate: number
    setSelectedTaxRate: Dispatch<SetStateAction<number>>
    setInvoice: React.Dispatch<React.SetStateAction<Invoice>>
    amount?: number
    taxOptions: Record<number, null>[]
    totalTax: number
    addShippingOption: () => void
    removeShippingOption: (i: number) => void 
    setInvoiceItem: Dispatch<SetStateAction<ProductLine[]>>
}

const Context = createContext<InformationContextTypes>({
  invoiceItem: initialProductLine,
  invoice: initialInvoice,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => { },
  handleAdd: () => { },
  handleRemove: function (i: number): void {
    throw new Error("Function not implemented.");
  },
  invoiceDate: undefined,
  dateFormat: "",
  invoiceDueDate: undefined,
  calculateAmount: (quantity: string, price: string, tax: string) => '',
  selectedTaxRate: 0,
  setSelectedTaxRate: function (value: SetStateAction<number>): void {
    throw new Error("Function not implemented.");
  },
  setInvoice() { },
  taxOptions: [],
  totalTax: 0,
  addShippingOption: function (): void {
    throw new Error("Function not implemented.");
  },
  removeShippingOption: function (i: number): void {
    throw new Error("Function not implemented.");
  },
  handleItemChange: function (index: number, e: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  },
  setInvoiceItem: function (value: SetStateAction<ProductLine[]>): void {
    throw new Error("Function not implemented.");
  },
  storeToLocalStorage: () => {}
}) 

export const InformationContext = ({ children }: IProps) => {
  
    const {
    invoice,
    handleChange,
    handleAdd,
    handleRemove,
    invoiceDate,
    dateFormat,
    invoiceDueDate,
    calculateAmount,
    subTotal,
    saleTax,
    selectedTaxRate,
    setSelectedTaxRate,
    amount,
    taxOptions,
    totalTax,
    addShippingOption,
    removeShippingOption,
    setInvoice,
    handleItemChange,
    invoiceItem,
    setInvoiceItem, storeToLocalStorage
    } = useInvoice();

return <Context.Provider 
        value={{ 
        invoice,
        handleChange,
        handleItemChange,
        handleAdd,
        handleRemove,
        invoiceDate,
        dateFormat,
        invoiceDueDate,
        calculateAmount,
        subTotal,
        saleTax,
        selectedTaxRate,
        setSelectedTaxRate,
        amount,
        taxOptions,
        totalTax,
        addShippingOption,
        removeShippingOption,
        setInvoice,
        setInvoiceItem,
        invoiceItem, 
        storeToLocalStorage
        }}>

        {children}

        </Context.Provider>
};

export const useInformationContext = () => useContext(Context)