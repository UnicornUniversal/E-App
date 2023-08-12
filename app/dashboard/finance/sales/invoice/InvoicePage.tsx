'use client'

import { CreateInvoice, Modal } from "@/app/components"
import { useToggle } from "@/app/hooks"
import { BsPersonFillAdd } from "react-icons/bs"


const InvoicePage = () => {

const [ createInvoiceModal, handleCreateModal, setCreateInvoiceModal ] = useToggle()

return <div className="w-full overflow-x-hidden overflow-y-scroll">

<div className="flex items-center justify-between">
<h1 className="text-xl font-bold">Invoices</h1>
            <Modal
             icon={BsPersonFillAdd}
            label="Create Invoice"
             modifier="btn"
             modal={createInvoiceModal ? 'invoice-modal' : ''}
             toggle={createInvoiceModal}
             onClick={() => handleCreateModal()}
             checked={createInvoiceModal}
             modalOff={() => setCreateInvoiceModal(false)}
            >
              <CreateInvoice/>
            </Modal>
          </div>
        </div>
}

export default InvoicePage