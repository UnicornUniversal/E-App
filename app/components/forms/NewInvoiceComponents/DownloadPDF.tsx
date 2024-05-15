import React, { FC, useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Invoice } from '@/types/interfaces'
import InvoicePageCom from './CreateInvoice'

interface Props {
  data?: Invoice
  show?: boolean
  component: any
} 

const Download: FC<Props> = ({ data, show, component: Com }) => {

    // const [show, setShow] = useState<boolean>(true)

    // useEffect(() => {
    //   setShow(false)

    //   const timeout = setTimeout(() => {
    //     setShow(true)
    //   }, 500)

    //   return () => clearTimeout(timeout)
    // }, [data])

  return (
    <div className={'download-pdf ' + (!show ? 'loading' : '')} title="Save PDF">
     
        <PDFDownloadLink
          document={<Com/>}
          fileName={`${data?.invoiceTitle ? data?.invoiceTitle.toLowerCase() : 'invoice'}.pdf`}
          aria-label="Save PDF"
        ><button>Download</button></PDFDownloadLink>
    
    </div>
  )
}

export default Download