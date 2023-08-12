'use client'

import { useState } from "react"

 interface InvoiceItem {
        id:          string
        description: string
        quantity:    number
        service:     string
        unitPrice:   string
        price:       string   
        totalAmount: string
    }
    
    interface InvoiceType {
        invoiceNumber: string     
        issueDate:     string
        dueDate :      string
        totalAmount:   string
        status:        String // Paid, Unpaid, Overdue, etc.
        items:         InvoiceItem[]
    }

    interface LineItem {
        description?: string;
        quantity?: number;
        unitPrice?: number;
      }

const useInvoice = () => {

    const initialInvoiceItemData: InvoiceItem ={
        id: "",
        description: "",
        quantity: 0,
        service: "",
        unitPrice: "",
        price: "",
        totalAmount: ""
    }

   const initialInvoiceData: InvoiceType = {

       invoiceNumber: "",
       issueDate: "",
       dueDate: "",
       totalAmount: "",
       status: 'Status',
       items: [initialInvoiceItemData]
   }

   

   const [ invoiceData, setInvoiceData ] = useState<InvoiceType>(initialInvoiceData)

   const [lineItems, setLineItems] = useState<LineItem[]>([]);

   // Other form state variables
 
   // Add item to lineItems array
   const addItem = () => {
    setLineItems([...lineItems, { description: undefined, quantity: undefined, unitPrice: undefined }]);
  };

 
   // Remove item from lineItems array
   const removeItem = (index: number) => {
     const updatedItems = lineItems.filter((_, i) => i !== index);
     setLineItems(updatedItems);
   };
 
   // Handle changes to a line item
   const handleItemChange = (index: number, field: keyof LineItem, value: string | number) => {
     const updatedItems: any = [...lineItems];
     updatedItems[index][field] = value;
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

  return {invoiceData, setInvoiceData, handleInvoiceChange, initialInvoiceItemData, initialInvoiceData}
}

export default useInvoice