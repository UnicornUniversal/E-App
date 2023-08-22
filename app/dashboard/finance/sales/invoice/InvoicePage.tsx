'use client'

import { CreateInvoice, Modal } from "@/app/components"
import InvoicePageCom from "@/app/components/forms/NewInvoiceComponents/InvoicePage"
import { useToggle } from "@/app/hooks"
import { BsPersonFillAdd } from "react-icons/bs"


const InvoicePage = () => {

const [ createInvoiceModal, handleCreateModal, setCreateInvoiceModal ] = useToggle()
const [ createInvoiceModal1, handleCreateModal1, setCreateInvoiceModal1 ] = useToggle()
const [ mode, handlePDFMode, setPDFMode ] = useToggle(false)
return <div className="w-full overflow-x-hidden overflow-y-scroll">

<div className="flex items-center justify-between">
<h1 className="text-xl font-bold">Invoices</h1>
        
            <Modal
              icon={BsPersonFillAdd}
              label="Create Invoice"
              modifier="btn"
              modal={createInvoiceModal1 ? 'invoice-modal2' : ''}
              toggle={createInvoiceModal1}
              onClick={() => handleCreateModal1()}
              checked={createInvoiceModal1}
              modalOff={() => setCreateInvoiceModal1(false)}
            >
            <InvoicePageCom pdfMode={mode} handlePDFMode={handlePDFMode}/>
            </Modal>
          </div>
        </div>
}

export default InvoicePage