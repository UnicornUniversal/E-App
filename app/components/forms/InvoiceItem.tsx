'use client'

import { IconType } from "react-icons"
import { Button, Input, Select } from ".."
import React from "react"
import { IoAccessibility } from "react-icons/io5"
import { FaPercentage, FaTrash } from "react-icons/fa"

interface InvoiceItemProps {
    handleInvoiceChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    clickEvent?: () => void
    index?: number
    item: {
        title: string
        description: string
        quantity:    number
        unitPrice:   number
        price:       number   
        tax:         number
        totalAmount: number
      };
    onChange: (index: any, field: string, value: string | number) => void;
    
    }


const InvoiceItem: React.FC<InvoiceItemProps> = ({item, index, onChange ,clickEvent, } ) => {
  return <div className="flex items-center gap-2">
            <Input    
              modifier="input" 
              type='text'
              name="title"
              value={item.title} 
              placeholder={"Title"} 
              icon={IoAccessibility }  
              onIcon={false}      
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(index, 'title', e.target.value)}
              />
            <Input    
                modifier="input" 
                type='text'
                name="description"
                value={item.description} 
                placeholder={"Description"} 
                icon={IoAccessibility }  
                onIcon={false}      
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(index, 'description', e.target.value)}
                />
            <Input    
              modifier="input" 
              type='text'
              name="quantity"
              value={item.quantity} 
              placeholder={"Issue date"} 
              icon={IoAccessibility }  
              onIcon={false}      
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(index, 'quantity', e.target.value)}
              />
            <Input    
              modifier="input" 
              type='text'
              name="tax"
              value={item.tax} 
              placeholder={"Tax"} 
              icon={   FaPercentage }  
              onIcon={true}      
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(index, 'description', e.target.value)}
              />
            <Select   
             title="Tax type"
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(index, 'service', e.target.value)}
             name="status">
               <option value="draft">Tax inclusive</option>
               <option value="paid">Tax exclusive</option>
             
           </Select>
            <Button text="Remove" modifier="bg-red-500/50" clickEvent={clickEvent} icon={FaTrash}/>
        </div>
}

export default InvoiceItem