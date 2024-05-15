'use client'

import { CreateWayBill, Modal } from "@/app/components"
import { useToggle } from "@/app/hooks"
import { BsPersonFillAdd } from "react-icons/bs"


const WayBillPage = () => {


const [ createWayBill, handleCreateWayBillModal, setCreateWayBillModal ] = useToggle()

  return <div className="w-full overflow-x-hidden overflow-y-scroll">

        <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">WayBill</h1>
        <Modal
          icon={BsPersonFillAdd}
          label="Create WayBill"
          modifier="btn"
          modal={createWayBill ? 'createWayBill' : ''}
          toggle={createWayBill}
          onClick={() => handleCreateWayBillModal()}
          checked={createWayBill}
          modalOff={() => setCreateWayBillModal(false)}
        >
          <CreateWayBill/>
        </Modal>
        
            </div>
          </div>
}
export default WayBillPage