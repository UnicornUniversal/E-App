'use client'

import { useState } from "react"

export interface InvoiceItem {
        id:          string
        title: string
        description: string
        quantity:    number
        unitPrice:   number
        price:       number  
        tax:         number 
        totalAmount: number
    }
    
    interface InvoiceType {
        invoiceNumber: string     
        issueDate:     string
        dueDate :      string
        totalAmount:   number
        status:        String // Paid, Unpaid, Overdue, etc.
        items:         InvoiceItem[]
    }


const useInvoice = () => {

    const initialInvoiceItemData: InvoiceItem ={
        id: "",
        title: "",
        description: "",
        quantity: 0,
        unitPrice: 0,
        price: 0,
        tax: 0,
        totalAmount: 0
    }

   const initialInvoiceData: InvoiceType = {
       invoiceNumber: "",
       issueDate: "",
       dueDate: "",
       totalAmount: 0,
       status: 'Status',
       items: [initialInvoiceItemData]
   }


   const [ invoiceData, setInvoiceData ] = useState<InvoiceType>(initialInvoiceData)

   const [lineItems, setLineItems] = useState<InvoiceItem[]>([]);

   // Other form state variables
 
   // Add item to lineItems array
   const addItem = () => {
    setLineItems([...lineItems, initialInvoiceItemData ]);
  };

 
   // Remove item from lineItems array
   const removeItem = (index: number) => {
     const updatedItems = lineItems.filter((_, i) => i !== index);
     setLineItems(updatedItems);
   };
 
   // Handle changes to a line item
  //  const handleItemChange = (index: number, field: string, value: string | number) => {
  //    const updatedItems: any = [...lineItems];
  //    updatedItems[index][field] = value;
  //    setLineItems(updatedItems);
  //  };
 
  //  const handlerChange = (e:  React.ChangeEvent<HTMLInputElement>, i: number) => {
  //   const { name, value } = e.target;
  //   const list = [...lineItems];
  //   list[i][name] = value;
  //   list[i]["totalAmount"] = list[i]["quantity"] * list[i]["price"];
  //   setLineItems(list);
  // };

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const updatedItem = { ...(lineItems.get(index) || {}), [field]: value };
    const updatedItems = new Map(lineItems);
    updatedItems.set(index, updatedItem);
    setLineItems(updatedItems);
  };
   // Submit form handler
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // Handle submission using Prisma or other methods
   };

 
   const handleInvoiceChange = (e:  React.ChangeEvent<HTMLInputElement>) => {

    const { value, type, name, checked} = e.target
    const newValue = type === "checkbox" ? checked : value;
    setInvoiceData((prevData) => ({
    ...prevData,
    [name]: newValue,
    }))
    setInvoiceData(prevData => ({...prevData, value }))
  }

  return {invoiceData, setInvoiceData, handleInvoiceChange, initialInvoiceItemData, 
          initialInvoiceData, addItem, setLineItems, lineItems, removeItem, handleItemChange
        }
}

export default useInvoice