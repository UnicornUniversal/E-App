'use client'

import { useEffect, useState } from "react"
import { Invoice, ProductLine } from '@/types/interfaces'
import { initialProductLine, initialInvoice } from "../components/forms/NewInvoiceComponents/data/initialData"
import { useToggle } from ".";


    const useReceipts = ( data?: Invoice, onChange?: (invoice: Invoice) => void ) => {
         
      const [invoice, setInvoice] = useState<Invoice>(data ? { ...data } : { ...initialInvoice })
      const [subTotal, setSubTotal] = useState<number>()
      const [saleTax, setSaleTax] = useState<number>()
      const [amount, setAmount] = useState<number>()
      const [ includeShippingOptions, setIncludeShippingOptions ] = useState<number>()
      const [selectedTaxRate, setSelectedTaxRate] = useState(0);
      const [totalTax, setTotalTax] = useState<number>(0);

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

        useEffect(() => {
        const totalTaxAmount = invoice.productLines.reduce((acc, productLine) => {
        const taxNumber = selectedTaxRate;
        const lineAmount = parseInt(productLine.amount);
        return acc + (taxNumber ? (lineAmount * taxNumber) / 100 : 0);
      }, 0);
  
  setTotalTax(totalTaxAmount);
}, [invoice.productLines, selectedTaxRate]);

    
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
          id: 0
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
      invoice, handleChange, handleAdd, handleRemove,
      invoiceDate, dateFormat, invoiceDueDate, calculateAmount, subTotal,taxOptions, totalTax,
      saleTax, mode, handlePDFMode, setPDFMode, selectedTaxRate, setSelectedTaxRate, amount
      };
    };
    
    export default useReceipts;
    