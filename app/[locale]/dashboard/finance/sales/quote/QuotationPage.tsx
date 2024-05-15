'use client'

import { CreateQuotes, Modal } from "@/app/components"
import { useToggle } from "@/app/hooks"
import { BsPersonFillAdd } from "react-icons/bs"


const QuotationPage = () => {


const [ createQuote, handleCreateQuoteModal, setCreateQuoteModal ] = useToggle()

  return <div className="w-full overflow-x-hidden overflow-y-scroll">

        <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Quotes</h1>
        <Modal
          icon={BsPersonFillAdd}
          label="Create Quote"
          modifier="btn"
          modal={createQuote ? 'createQuote' : ''}
          toggle={createQuote}
          onClick={() => handleCreateQuoteModal()}
          checked={createQuote}
          modalOff={() => setCreateQuoteModal(false)}
        >
          <CreateQuotes/>
        </Modal>
        
            </div>
          </div>
}
export default QuotationPage