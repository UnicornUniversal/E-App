'use client'

import { useEffect, useState } from "react"
import { Invoice, ProductLine } from '@/types/interfaces'
import { initialProductLine, initialInvoice, initialShippingOptions } from "../components/forms/NewInvoiceComponents/data/initialData"
import { useToggle } from ".";
import { generate } from "shortid";

    const useInvoice = ( data?: Invoice, onChange?: (invoice: Invoice) => void ) => {
         
      const [invoiceItem, setInvoiceItem] = useState<ProductLine[]>(initialProductLine);
      const [invoice, setInvoice] = useState<Invoice>({
      logo: '',
      logoWidth: 100,
      title: '',
      companyName: '',
      name: '',
      companyAddress: '',
      companyAddress2: '',
      companyCountry: 'United States',
      billTo: '',
      clientName: '',
      clientAddress: '',
      clientAddress2: '',
      clientCountry: 'United States',
      invoiceTitleLabel: 'Invoice#',
      invoiceTitle: '',
      invoiceDateLabel: 'Invoice Date',
      invoiceDate: '',
      invoiceDueDateLabel: 'Due Date',
      invoiceDueDate: '',
      productLineDescription: 'Item Description',
      productLineQuantity: 'Quantity',
      productLineQuantityRate: 'Rate',
      productLineQuantityAmount: 'Amount',
      productLines: invoiceItem,
      shippingOptions: initialShippingOptions,
      subTotalLabel: 'Sub Total',
      taxLabel: 'Sale Tax (10%)',
      totalLabel: 'TOTAL',
      currency: '$',
      notesLabel: 'Notes',
      notes: 'It was great doing business with you.',
      termLabel: 'Terms & Conditions',
      term: 'Please make the payment by the due date.',
      slice: function (arg0: number, index: number): unknown {
        throw new Error("Function not implemented.")
      }
    })

    const storeToLocalStorage = () => {
      localStorage.setItem('invoice', JSON.stringify(invoice))
    }
      
      const [subTotal, setSubTotal] = useState<number>()
      const [saleTax, setSaleTax] = useState<number>()
      const [amount, setAmount] = useState<number>()
      const [selectedTaxRate, setSelectedTaxRate] = useState(0);
      const [totalTax, setTotalTax] = useState<number>(0);

      const taxOptions = [
        {'percentage': 0 },   
        {'percentage': 4 },   
        {'percentage': 5 },   
        {'percentage': 10 },
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
      
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, type, name, checked} = e.target
               const newValue = type === "checkbox" ? checked : value;
        setInvoice((prevData) => ({
        ...prevData,
        [name]: newValue,
        }))
    }

  const handleItemChange = (index: number, e:  React.ChangeEvent<HTMLInputElement>) => {
    const values = [...invoiceItem];
    if (e.target.name === 'description') {
      values[index].description = e.target.value;
    } else if (e.target.name === 'quantity') {
      values[index].quantity = e.target.value;
    } else if (e.target.name === 'price') {
      values[index].price = e.target.value;
    }
    setInvoiceItem(values);
  };


        useEffect(() => {
        const totalTaxAmount = invoice.productLines.reduce((acc, productLine) => {
        const taxNumber = parseInt(productLine.taxRate);
        const lineAmount = parseInt(productLine.amount);
        return acc + (taxNumber ? (lineAmount * taxNumber) / 100 : 0);
      }, 0);
  
  setTotalTax(totalTaxAmount);
}, [invoice.productLines, selectedTaxRate]);
  
    
      const handleRemove = (i: number) => {
        const productLines = invoiceItem.filter((productLine, index) => index !== i)
        setInvoiceItem( productLines )
      }
    
      const handleAdd = () => {

        setInvoiceItem(invoiceItem => [
          ...invoiceItem,
          {
            id: generate(),
            description: '',
            quantity: '',
            price: '',
            taxRate: 0,
            discount: '',
            amount: ''
          }
        ])
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
        
        return totalAmount.toFixed(2);
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

      // Shipping options

      const addShippingOption = () => {
        setInvoice({
          ...invoice,
          shippingOptions: [...invoice.shippingOptions, { description: '', price: ''}],
        });
      };
    
      const removeShippingOption = (index: number) => {
        const updatedShippingOptions = [...invoice.shippingOptions];
        updatedShippingOptions.splice(index, 1);
        setInvoice({ ...invoice, shippingOptions: updatedShippingOptions });
      };
    
   
    
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
      invoice, handleChange, handleAdd, handleRemove, addShippingOption, removeShippingOption, setInvoiceItem,
      invoiceDate, dateFormat, invoiceDueDate, calculateAmount, subTotal,taxOptions, totalTax, setInvoice,
      saleTax, mode, handlePDFMode, setPDFMode, selectedTaxRate, setSelectedTaxRate, amount, handleItemChange, invoiceItem, storeToLocalStorage
      };
    };
    
    export default useInvoice;

    