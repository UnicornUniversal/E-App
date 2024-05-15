'use client'

import { useEffect } from "react"
import {  BaseButton, Button, Download, InvoiceExportModal, InvoiceMain, InvoicePDF, MainInvoiceModal, Modal } from "@/app/components"
import InvoicePageCom from "@/app/components/forms/NewInvoiceComponents/CreateInvoice"
import { useInvoice, usePDFStyles, useToggle } from "@/app/hooks"
import { BsPersonFillAdd } from "react-icons/bs"
import { FaEye } from "react-icons/fa"
import { useInformationContext } from "@/app/context/InformationContext"
import { Import } from "lucide-react"

const InvoicePage = () => {

const [ createInvoiceModal1, handleCreateModal1, setCreateInvoiceModal1 ] = useToggle()
const [ mode, handlePDFMode, setPDFMode ] = useToggle(false)
const { storeToLocalStorage, invoice } = useInformationContext()
const { quotes } = usePDFStyles()

const handleSwitch = () => {
  handlePDFMode()
  localStorage.setItem('invoice', JSON.stringify(invoice))
  if (mode) {
  localStorage.removeItem('invoice');
  }

}

useEffect(() => {
  localStorage.removeItem('invoice');
}, [])


console.log(invoice);



return <div className="w-full overflow-x-hidden overflow-y-scroll">
<div className="flex items-center justify-between">
<h1 className="text-xl font-bold">Invoices</h1>
        
            <Modal
              icon={BsPersonFillAdd}
              label={`Create Invoice`}
              modifier="btn"
              modal={createInvoiceModal1 ? 'invoice-modal2' : ''}
              toggle={createInvoiceModal1}
              onClick={() => handleCreateModal1()}
              checked={createInvoiceModal1}
               modalOff={() => setCreateInvoiceModal1(false)}
            > 
              <div className="">

                    <InvoiceMain/>
              </div>
            </Modal>
                        {/* <MainInvoiceModal>        
                          <InvoiceMain/>
                        </MainInvoiceModal>
       */}
          </div>
        </div>
}

export default InvoicePage