'use client'

import { useEffect, useState } from "react"
import { Invoice, ProductLine } from '@/types/interfaces'
import { initialProductLine, initialInvoice } from "../components/forms/NewInvoiceComponents/data/initialData"
import { useToggle } from ".";


    const useQuotes = ( data?: Invoice, onChange?: (invoice: Invoice) => void ) => {
      const initialSelectValues = [0, 4, 5, 10];
      const [invoice, setInvoice] = useState<Invoice>(data ? { ...data } : { ...initialInvoice })
      const [subTotal, setSubTotal] = useState<number>()
      const [saleTax, setSaleTax] = useState<number>()
      const [amount, setAmount] = useState<number>()
      const [ includeShippingOptions, setIncludeShippingOptions ] = useState<number>()
      const [selectedTaxRate, setSelectedTaxRate] = useState<number>(0);
      const [totalTax, setTotalTax] = useState<number>(0);
      const [selectValues, setSelectValues] = useState(initialSelectValues);

      const taxOptions = [
        { 'percentage': 0},   {'percentage': 4},   {'percentage': 5},   {'percentage': 10},
      ]

      const [ mode, handlePDFMode, setPDFMode ] = useToggle(false)
      const dateFormat = 'MMM dd, yyyy'
      const invoiceDate = invoice.invoiceDate !== '' ? new Date(invoice.invoiceDate) : new Date()
      const invoiceDueDate =
        invoice.invoiceDueDate !== ''
          ? new Date(invoice.invoiceDueDate)
          : new Date(invoiceDate.valueOf())
    
      if (invoice.invoiceDueDate === '') {
        invoiceDueDate.setDate(invoiceDueDate.getDate() + 30)
      }
    
      const handleChange = (name: keyof Invoice, value: string | number) => {
        if (name !== 'productLines') {
          const newInvoice = { ...invoice }
    
          if (name === 'logoWidth' && typeof value === 'number') {
            newInvoice[name] = value
          } else if (name !== 'logoWidth' && typeof value === 'string') {
            newInvoice[name] = value
          }
    
          setInvoice(newInvoice)
        }
      }
  
      const handleSelectChange = (index: number, newValue: any) => {
        const newSelectValues = [...selectValues];
        newSelectValues[index] = newValue;
        setSelectValues(newSelectValues);
      };
    

        useEffect(() => {
        const totalTaxAmount = invoice.productLines.reduce((acc, productLine) => {
        const taxNumber: any = selectValues;
        const lineAmount = parseInt(productLine.amount);
        return acc + (taxNumber ? (taxNumber * lineAmount ) / 100 : 0);
      }, 0);
  
  setTotalTax(totalTaxAmount);
}, [invoice.productLines, selectValues, selectedTaxRate]);
    
      const handleProductLineChange = (index: number, name: keyof ProductLine, value: string) => {
        const productLines = invoice.productLines.map((productLine, i) => {
          if (i === index) {
            const newProductLine = { ...productLine };
      
            if (name === 'description') {
              newProductLine[name] = value;
            } else if (name === 'taxRate') {
              newProductLine[name] = value; // Update taxRate field
              newProductLine.amount = calculateAmount(
                newProductLine.quantity,
                newProductLine.price,
                value // Use the updated taxRate value
              );
            } else {
              if (value[value.length - 1] === '.' || (value[value.length - 1] === '0' && value.includes('.'))) {
                newProductLine[name] = value;
              } else {
                const n = parseFloat(value);
                newProductLine[name] = (n ? n : 0).toString();
              }
              // Recalculate amount when other fields change
              newProductLine.amount = calculateAmount(
                newProductLine.quantity,
                newProductLine.price,
                newProductLine.taxRate // Use the current taxRate value
              );
            }
      
            return newProductLine;
          }
      
          return { ...productLine };
        });
      
        setInvoice({ ...invoice, productLines });
      };
      
    
      const handleRemove = (i: number) => {
        const productLines = invoice.productLines.filter((productLine, index) => index !== i)
    
        setInvoice({ ...invoice, productLines })
      }
    
      const handleAdd = () => {
        const newProductLine: ProductLine = {
          ...initialProductLine,
          description: '',
          quantity: '',
          price: '',
          taxRate: 'Tax',
          discount: '',
          amount: '',
          id: ""
        };
        const productLines: ProductLine[] = [...invoice.productLines, newProductLine];
      
        setInvoice({ ...invoice, productLines });
      };

      let total: number = 0
      
      const calculateAmount = (quantity: string, price: string, tax: string) => {
        const quantityNumber = parseFloat(quantity);
        const priceNumber = parseFloat(price);
        const taxNumber = parseInt(tax);
        const amount = quantityNumber && priceNumber ? quantityNumber * priceNumber : 0;
        const taxAmount = taxNumber ? amount * (taxNumber / 100) : 0; // Calculate tax amount
        total = amount
        const totalAmount = amount + taxAmount; // Add tax amount to the original amount
        
        return Math.round(totalAmount).toFixed(2);
      };
  
    
      useEffect(() => {
        let subTotal = 0
    
        invoice.productLines.forEach((productLine) => {
          
          const quantityNumber = parseFloat(productLine.quantity)
          const priceNumber = parseFloat(productLine.price)
          const amount = quantityNumber && priceNumber ? quantityNumber * priceNumber  : 0

          subTotal += amount
     
        })
    
        setSubTotal(subTotal)
      }, [invoice.productLines])
    
      // useEffect(() => {
      //   const match = invoice.taxLabel.match(/(\d+)%/);
      //   // const taxRate = match ? selectedTaxRate / 100 : 0 // Divide by 100 to convert from percentage to decimal
      //   const saleTax = subTotal ? subTotal * selectedTaxRate : 0;
      //   setSaleTax(subTotal);
      // }, [subTotal, invoice.taxLabel, selectedTaxRate]);
    
      useEffect(() => {
        if (onChange) {
          onChange(invoice)
        }
      }, [onChange, invoice])

      return {
      invoice, handleChange, handleAdd, handleProductLineChange, handleRemove, selectValues, setSelectValues,
      invoiceDate, dateFormat, invoiceDueDate, calculateAmount, subTotal,taxOptions, totalTax,
      saleTax, mode, handlePDFMode, setPDFMode, selectedTaxRate, setSelectedTaxRate, amount, handleSelectChange
      };
    };
    
    export default useQuotes;
    