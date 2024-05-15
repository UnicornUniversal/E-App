import React, { FC, useState, useEffect, useRef } from 'react'
import { Invoice, ProductLine, ShippingOptions } from '@/types/interfaces'
import { TaxOptions, initialInvoice, initialProductLine } from './data/initialData'
import format from 'date-fns/format'
import { Button, Input, InputArray, Modal, Select, TextArea } from '../..'
import { FaCloudDownloadAlt, FaFilePdf, FaIcons, FaPlus, FaPlusCircle, FaTrash } from 'react-icons/fa'
import { useInvoice, useToggle } from '@/app/hooks'
import Contacts from '../Contacts/Contacts'
import { InformationContext, useInformationContext } from '@/app/context/InformationContext'
import { IconBaseProps } from 'react-icons'
import { generate } from "shortid";
import { produce } from "immer"


interface Props {
  data?: Invoice
  pdfMode?: boolean
  onChange?: (invoice: Invoice) => void
  handlePDFMode?: () => void
}
interface Person {
  id: string;
  firstName: string;
  lastName: string;
}

const InvoicePageCom: FC<Props> = ({ data, pdfMode, onChange, handlePDFMode }) => {

  const [ openContact, handleOpenContact, setOpenContact ] = useToggle()

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
    setInvoiceItem,
    invoiceItem

    } = useInvoice();

  console.log(invoice);
  return (

<>
  <Input onChange={handleChange} icon={FaFilePdf} type='text' name={`invoiceTitle`} value={invoice.invoiceTitle} placeholder=''/>
   <InputArray 
    handleAdd={handleAdd}
    handleRemove={handleRemove}
    invoiceItem={invoiceItem}
    setInvoiceItem={setInvoiceItem}
    taxOptions={taxOptions}
    calculateAmount={calculateAmount}
    />
    
   <div>{JSON.stringify(invoiceItem, null, 2)}</div>
</>
  )
}

export default InvoicePageCom 
