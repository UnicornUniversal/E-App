'use client'

import { CreateReceipt, Modal } from '@/app/components'
import { useToggle } from '@/app/hooks'
import React from 'react'
import { BsPersonFillAdd } from 'react-icons/bs'

const ReceiptsPage = () => {

  const [ createReceipt, handleReceiptModal, setReceiptModal ] = useToggle()

  return <div className="w-full overflow-x-hidden overflow-y-scroll">

        <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Receipts</h1>
        <Modal
          icon={BsPersonFillAdd}
          label="Create Reciept"
          modifier="btn"
          modal={createReceipt ? 'Receipt' : ''}
          toggle={createReceipt}
          onClick={() => handleReceiptModal()}
          checked={createReceipt}
          modalOff={() => setReceiptModal(false)}
        >
         {/* <CreateReceipt/> */}
        </Modal>
        
            </div>
          </div>
}

export default ReceiptsPage